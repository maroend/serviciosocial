import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHoursComponent } from './student-hours.component';

describe('StudentHoursComponent', () => {
  let component: StudentHoursComponent;
  let fixture: ComponentFixture<StudentHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
