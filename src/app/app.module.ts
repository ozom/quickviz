import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {CommonModule} from '@angular/common';
import { MyDatePickerModule } from 'mydatepicker';

import {AuthGuardService} from './views/auth/auth-gard.service';
import {AuthService} from './views/auth/auth.service';

import { StorageServiceModule} from 'angular-webstorage-service';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
// Import containers
import { DefaultLayoutComponent } from './containers';
import {PopoverModule} from "ngx-popover";
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { DataService } from "./views/sharing-data-service";
import { FormsModule } from '@angular/forms';
const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular'

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AppAsideModule,
    PopoverModule,
    StorageServiceModule,
    AppBreadcrumbModule.forRoot(),
    MyDatePickerModule,
    AppFooterModule,
    AppHeaderModule,
    HttpClientModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },DataService,AuthGuardService,AuthService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
