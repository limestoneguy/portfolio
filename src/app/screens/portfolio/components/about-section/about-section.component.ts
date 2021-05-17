import {
  AfterContentInit,
  Component,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
declare var require: any;
const ScrollOut = require('scroll-out');
@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
})
export class AboutSectionComponent implements AfterContentInit, OnDestroy {
  scrollOut: any;

  constructor(
    private elementRef: ElementRef,
    private helperService: HelperService
  ) {}

  ngAfterContentInit(): void {
    this.scrollOut = ScrollOut({
      scope: this.elementRef.nativeElement,
      onShown: () => {
        this.helperService.activeLink = 'about';
      },
    });
  }
  ngOnDestroy(): void {
    this.scrollOut?.teardown();
  }
}
