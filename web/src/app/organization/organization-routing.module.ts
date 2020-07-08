import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizationAddComponent } from './organization-add/organization-add.component';
import { OrganizationDocumentsComponent } from './organization-documents/organization-documents.component';
import { OrganizationEvaluationComponent } from './organization-evaluation/organization-evaluation.component';
import { OrganizationHoursComponent } from './organization-hours/organization-hours.component';
import { OrganizationProjectsComponent } from './organization-projects/organization-projects.component';
import { OrganizationProjectAddComponent } from './organization-project-add/organization-project-add.component';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';
import { OrganizationProjectDetailComponent } from './organization-project-detail/organization-project-detail.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
},{
  path: '',
  children: [
    {
      path: 'home',
      component: DashboardComponent
    },{
      path: 'add',
      component: OrganizationAddComponent
    },{
      path: 'detail',
      component: OrganizationDetailComponent
    },{
      path: 'documents',
      component: OrganizationDocumentsComponent
    },{
      path: 'evaluation',
      component: OrganizationEvaluationComponent
    },{
      path: 'hours',
      component: OrganizationHoursComponent
    },{
      path: 'projects',
      component: OrganizationProjectsComponent
    },{
      path: 'project',
      component: OrganizationProjectAddComponent
    },{
      path: 'project-detail',
      component: OrganizationProjectDetailComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
