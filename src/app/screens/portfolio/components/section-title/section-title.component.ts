import { AfterContentInit, ElementRef, Input, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
declare var require: any;
const ScrollOut = require('scroll-out');

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
})
export class SectionTitleComponent implements AfterContentInit, OnDestroy {
  @Input('background-title')
  background_title!: string;
  scrollOut: any;

  @Input('title')
  title!: string;

  constructor(private elementRef: ElementRef) {}

  ngAfterContentInit(): void {
    this.scrollOut = ScrollOut({
      scope: this.elementRef.nativeElement
    })
  }
  ngOnDestroy(): void {
    this.scrollOut?.teardown();
  }
}
