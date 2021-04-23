import {
  AfterContentInit,
  Component,
  ElementRef,
  OnDestroy,
} from '@angular/core';
declare var require: any;
const ScrollOut = require('scroll-out');
@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
})
export class AboutSectionComponent implements AfterContentInit, OnDestroy {
  scrollOut: any;

  constructor(private elementRef: ElementRef) {}

  ngAfterContentInit(): void {
    this.scrollOut = ScrollOut({
      scope: this.elementRef.nativeElement,
    });
  }
  ngOnDestroy(): void {
    this.scrollOut?.teardown();
  }
}
