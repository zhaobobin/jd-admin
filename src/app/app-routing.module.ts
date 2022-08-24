import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from './pages/other/not-found.component';

import { AuthComponent } from './auth/auth.component';
import { AuthLoginComponent } from './auth/login/login.component';
import { AuthResetComponent } from './auth/reset/reset.component';

import { PagesComponent } from './pages/pages.component';
import { WorkbenchComponent } from './pages/workbench/workbench.component';
import { MemberManageComponent } from './pages/members/member-manage.component';
import { DepartmentManageComponent } from './pages/departments/department-manage.component';
import { ApplicationManageComponent } from './pages/applications/application-manage.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: AuthLoginComponent,
      },
      {
        path: 'reset',
        component: AuthResetComponent,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: 'workbench',
        component: WorkbenchComponent,
      },
      {
        path: 'members',
        component: MemberManageComponent,
      },
      {
        path: 'departments',
        component: DepartmentManageComponent,
      },
      {
        path: 'applications',
        component: ApplicationManageComponent,
      },
      {
        path: '',
        redirectTo: 'workbench',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
