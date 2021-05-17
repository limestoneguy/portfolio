import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
declare var require: any;
const ScrollOut = require('scroll-out');

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
})
export class SkillCardComponent implements OnInit {
  @Input('skill_details') skill_details!: { name: string; competence: number };
  @ViewChild('skillProgress') skillProgress!: ElementRef<HTMLDivElement>;
  timeout_duration = 150;
  scrollOut: any;

  constructor(private elementRef: ElementRef, private helperService: HelperService) {}

  ngAfterContentInit(): void {
    this.scrollOut = ScrollOut({
      scope: this.elementRef.nativeElement,
      onShown: () => {
        this.fillSkillNumber();
      },
    });
  }
  ngOnDestroy(): void {
    this.scrollOut?.teardown();
  }

  async fillSkillNumber() {
    const steps = this.skill_details.competence / this.timeout_duration;
    let competence = 0;

    for (let i = 0; i < this.skill_details.competence; i += steps) {
      competence += steps;
      this.skillProgress.nativeElement.style.setProperty(
        '--progress',
        `${(competence * 100).toFixed(1)}%`
      );
      this.skillProgress.nativeElement.innerHTML = `${(competence * 100).toFixed(0)}%`;
      await this.timeOut(1);
    }
  }

  async timeOut(duration: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, duration);
    });
  }

  ngOnInit(): void {}
}
