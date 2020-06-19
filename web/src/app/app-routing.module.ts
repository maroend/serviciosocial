import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'auth',
  pathMatch: 'full',
}, {
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'home',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }]
}, {
  path: '**',
  redirectTo: 'session/404'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
