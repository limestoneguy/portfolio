import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
})
export class SectionTitleComponent implements OnInit {
  @Input('background-title')
  background_title!: string;

  @Input('title')
  title!: string;

  constructor() {}

  ngOnInit(): void {}
}
