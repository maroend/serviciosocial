import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { OrganizationAddComponent } from './organization-add/organization-add.component';
import { OrganizationDocumentsComponent } from './organization-documents/organization-documents.component';
import { OrganizationProjectsComponent } from './organization-projects/organization-projects.component';
import { OrganizationHoursComponent } from './organization-hours/organization-hours.component';
import { OrganizationEvaluationComponent } from './organization-evaluation/organization-evaluation.component';
import { OrganizationProjectAddComponent } from './organization-project-add/organization-project-add.component';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';
import { OrganizationProjectDetailComponent } from './organization-project-detail/organization-project-detail.component';


@NgModule({
  declarations: [DashboardComponent, OrganizationAddComponent, OrganizationDocumentsComponent, OrganizationProjectsComponent, OrganizationHoursComponent, OrganizationEvaluationComponent, OrganizationProjectAddComponent, OrganizationDetailComponent, OrganizationProjectDetailComponent],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    SharedModule
  ]
})
export class OrganizationModule { }
