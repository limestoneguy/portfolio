import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-history-section',
  templateUrl: './work-history-section.component.html',
  styleUrls: ['./work-history-section.component.scss'],
})
export class WorkHistorySectionComponent implements OnInit {
  work_history_array = [
    {
      designation: 'Project Engineer',
      company: 'Wipro Limited',
      start_date: 'Jun 2019',
      end_date: 'Current',
      responsibilities: [
        'Developed APIs on Node.JS',
        'Created an application to simulate the 3rd party API data on development environments.',
        'Created beautiful UI screens for mobile and web Applications.',
        'Secured REST APIs using JWT, OAuth2.0, ABAC (Attribute based access control).',
        'Created Admin Panel for the client to manage their customer data using Angular.',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
