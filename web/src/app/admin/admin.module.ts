import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { FilesComponent } from './files/files.component';
import { StudentsComponent } from './students/students.component';
import { StudentProcessComponent } from './student-process/student-process.component';
import { UsersComponent } from './users/users.component';
import { OrganizationsComponent } from './organizations/organizations.component';


@NgModule({
  declarations: [ProjectsComponent, FilesComponent, StudentsComponent, StudentProcessComponent, UsersComponent, OrganizationsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
