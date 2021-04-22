import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-history-card',
  templateUrl: './work-history-card.component.html',
  styleUrls: ['./work-history-card.component.scss'],
})
export class WorkHistoryCardComponent implements OnInit {
  @Input('work_history')
  work_history!: {
    designation: string;
    company: string;
    start_date: string;
    end_date: string;
    responsibilities: string[];
  };

  constructor() {}

  ngOnInit(): void {}
}
