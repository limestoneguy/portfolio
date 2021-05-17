import { Component, ElementRef, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
declare var require:any
const ScrollOut = require('scroll-out');

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],
})
export class SkillsSectionComponent implements OnInit {
  skillsArray = [
    { name: 'Angular', competence: 0.8 },
    { name: 'NodeJS', competence: 0.8 },
    { name: 'Flutter', competence: 0.85 },
    { name: 'Core-JAVA', competence: 0.75 },
    { name: 'Ionic', competence: 0.6 },
    { name: 'Typescript', competence: 0.8 },
    { name: 'AWS', competence: 0.45 },
    { name: 'API design', competence: 0.6 },
  ];
  scrollOut: any;

  constructor(private elementRef: ElementRef, private helperService: HelperService) {}


  ngAfterContentInit(): void {
    this.scrollOut = ScrollOut({
      scope: this.elementRef.nativeElement,
      onShown: () => {
        this.helperService.activeLink = 'skills'
      },
    });
  }
  ngOnDestroy(): void {
    this.scrollOut?.teardown();
  }

  ngOnInit(): void {}
}
