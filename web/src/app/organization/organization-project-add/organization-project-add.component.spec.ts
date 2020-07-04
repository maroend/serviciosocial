import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationProjectAddComponent } from './organization-project-add.component';

describe('OrganizationProjectAddComponent', () => {
  let component: OrganizationProjectAddComponent;
  let fixture: ComponentFixture<OrganizationProjectAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationProjectAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationProjectAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
