import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAttendanceOverviewComponent } from './class-attendance-overview.component';

describe('ClassAttendanceOverviewComponent', () => {
  let component: ClassAttendanceOverviewComponent;
  let fixture: ComponentFixture<ClassAttendanceOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassAttendanceOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassAttendanceOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
