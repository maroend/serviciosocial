import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStepsComponent } from './student-steps.component';

describe('StudentStepsComponent', () => {
  let component: StudentStepsComponent;
  let fixture: ComponentFixture<StudentStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
