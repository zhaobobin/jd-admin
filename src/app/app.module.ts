import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

// antd
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { NotFoundComponent } from './pages/other/not-found.component';

import { AuthComponent } from './auth/auth.component';
import { AuthLoginComponent } from './auth/login/login.component';
import { AuthResetComponent } from './auth/reset/reset.component';

import { PagesComponent } from './pages/pages.component';
import { WorkbenchComponent } from './pages/workbench/workbench.component';
import { MemberManageComponent } from './pages/members/member-manage.component';
import { DepartmentManageComponent } from './pages/departments/department-manage.component';
import { ApplicationManageComponent } from './pages/applications/application-manage.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AuthComponent,
    AuthLoginComponent,
    AuthResetComponent,
    
    PagesComponent,
    WorkbenchComponent,
    MemberManageComponent,
    DepartmentManageComponent,
    ApplicationManageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    DragDropModule,
    NzGridModule,
    NzIconModule,
    NzButtonModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzDropDownModule,
    NzModalModule,
    NzTreeModule,
    NzBreadCrumbModule,
    NzTransferModule,
    NzSkeletonModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
