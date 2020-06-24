import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizationAddComponent } from './organization-add/organization-add.component';
import { OrganizationDocumentsComponent } from './organization-documents/organization-documents.component';
import { OrganizationEvaluationComponent } from './organization-evaluation/organization-evaluation.component';
import { OrganizationHoursComponent } from './organization-hours/organization-hours.component';
import { OrganizationProjectsComponent } from './organization-projects/organization-projects.component';


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
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
