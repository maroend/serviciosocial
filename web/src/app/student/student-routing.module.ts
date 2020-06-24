import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentProjectsComponent } from './student-projects/student-projects.component';
import { StudentHoursComponent } from './student-hours/student-hours.component';
import { StudentEvaluationComponent } from './student-evaluation/student-evaluation.component';
import { StudentStepsComponent } from './student-steps/student-steps.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
},{
  path: '',
  children: [
    {
      path: 'home',
      component: StudentProfileComponent
    },{
      path: 'projects',
      component: StudentProjectsComponent
    },{
      path: 'hours',
      component: StudentHoursComponent
    },{
      path: 'evaluation',
      component: StudentEvaluationComponent
    },{
      path: 'steps',
      component: StudentStepsComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
