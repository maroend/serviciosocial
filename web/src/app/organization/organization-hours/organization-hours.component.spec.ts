import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationHoursComponent } from './organization-hours.component';

describe('OrganizationHoursComponent', () => {
  let component: OrganizationHoursComponent;
  let fixture: ComponentFixture<OrganizationHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
