import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationProjectDetailComponent } from './organization-project-detail.component';

describe('OrganizationProjectDetailComponent', () => {
  let component: OrganizationProjectDetailComponent;
  let fixture: ComponentFixture<OrganizationProjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationProjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
