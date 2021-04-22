import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistorySectionComponent } from './work-history-section.component';

describe('WorkHistorySectionComponent', () => {
  let component: WorkHistorySectionComponent;
  let fixture: ComponentFixture<WorkHistorySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkHistorySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkHistorySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
