import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProjectsComponent } from './student-projects.component';

describe('StudentProjectsComponent', () => {
  let component: StudentProjectsComponent;
  let fixture: ComponentFixture<StudentProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
