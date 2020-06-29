import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationEvaluationComponent } from './organization-evaluation.component';

describe('OrganizationEvaluationComponent', () => {
  let component: OrganizationEvaluationComponent;
  let fixture: ComponentFixture<OrganizationEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
