import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { RulesComponent } from './rules/rules.component';
import { StudentHoursComponent } from './student-hours/student-hours.component';
import { StudentStepsComponent } from './student-steps/student-steps.component';
import { StudentEvaluationComponent } from './student-evaluation/student-evaluation.component';
import { StudentProjectsComponent } from './student-projects/student-projects.component';


@NgModule({
  declarations: [StudentProfileComponent, RulesComponent, StudentHoursComponent, StudentStepsComponent, StudentEvaluationComponent, StudentProjectsComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
