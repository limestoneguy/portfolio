import {
  AfterContentInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
declare const require: any;
const ScrollOut = require('scroll-out');

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterContentInit, OnDestroy {
  scrollOut: any;
  constructor(private elementRef: ElementRef, private helperService: HelperService) {}

  ngAfterContentInit(): void {
    this.scrollOut = ScrollOut({
      scope: this.elementRef.nativeElement,
    });
  }
  ngOnDestroy(): void {
    this.scrollOut?.teardown();
  }
  get activeLink(){
    return this.helperService.activeLink;
  }

  moveToId(id: 'home' | 'about' | 'skills') {
    this.helperService.activeLink = id;
    document.getElementById(id)?.scrollIntoView()
  }
}
