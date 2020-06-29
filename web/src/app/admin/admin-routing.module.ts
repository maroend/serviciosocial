import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationsComponent } from './organizations/organizations.component';
import { ProjectsComponent } from './projects/projects.component';
import { StudentsComponent } from './students/students.component';
import { StudentProcessComponent } from './student-process/student-process.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
},{
  path: '',
  children: [
    {
      path: 'home',
      component: OrganizationsComponent
    },{
      path: 'projects',
      component: ProjectsComponent
    },{
      path: 'students',
      component: StudentsComponent
    },{
      path: 'process',
      component: StudentProcessComponent
    },{
      path: 'users',
      component: UsersComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
