import { Component, ElementRef, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
declare var require: any;
const ScrollOut = require('scroll-out');

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.scss']
})
export class FaceComponent implements OnInit {

  scrollOut: any;

  constructor(
    private elementRef: ElementRef,
    private helperService: HelperService
  ) {}

  ngAfterContentInit(): void {
    this.scrollOut = ScrollOut({
      scope: this.elementRef.nativeElement,
      onShown: () => {
        this.helperService.activeLink = 'home';
        console.log(this.helperService.activeLink);

      },
      onHidden: function() {
        console.log("home hidden");
      }

    });

    console.log(this.scrollOut.update);
    console.log(this.scrollOut);

  }

  ngOnDestroy(): void {
    this.scrollOut?.teardown();
  }

  ngOnInit(): void {
  }

}
