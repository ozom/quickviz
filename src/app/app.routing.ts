import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthGuardService as AuthGuard} from './views/auth/auth-gard.service'
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'velocite',
        loadChildren: './views/velocite/mobile.module#MobileModule'
      },
      {
        path: 'velocite-details',
        loadChildren: './views/velocite2/mobile.module#MobileModule'
      },
      {
        path: 'omoi',
        loadChildren: './views/o&moi/o&moi.module#MobileModule'
      },
      {
        path: 'CA',
        loadChildren: './views/CA/CA.module#CAModule'
      },
      {
        path: 'digital-inside',
        loadChildren: './views/digital-inside/digital-inside.module#DigitalInsideModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'coutom',
        loadChildren: './views/coutom/coutom.module#CoutomModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'moodboard',
        loadChildren: './views/moodboard/moodboard.module#MoodboardModule'
      },
      {
        path: 'kudowall',
        loadChildren: './views/kudowall/kudo.module#MoodboardModule'
      },
      {
        path: 'staffing',
        loadChildren: './views/staffing/kudo.module#MoodboardModule'
      },
      {
        path: 'pmoboard',
        loadChildren: './views/pmoboard/pmoboard.module#PmoboardModule'
      },
      {
        path: 'epique',
        loadChildren: './views/epique/epique.module#Pmoboard2Module'
      },
      {
        path: 'pmoboard-details',
        loadChildren: './views/pmoboard_2/pmoboard2.module#Pmoboard2Module'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'churn',
        loadChildren: './views/churn/churn.module#ChurnModule'
      },
      {
        path: 'usescasebm',
        loadChildren: './views/usescasebm/usescasebm.module#UsescasebmModule'
      },
      {
        path: 'coutbudgetbm',
        loadChildren: './views/coutbudgetbm/coutbudgetbm.module#CoutbudgetbmModule'
      },
      {
        path: 'epicbm',
        loadChildren: './views/epicbm/epicbm.module#EpicbmModule'
      },
      {
        path: 'epicare',
        loadChildren: './views/epicare/epicare.module#EpicareModule'
      },
      {
        path: 'releasecare',
        loadChildren: './views/releasecare/releasecare.module#ReleasecareModule'
      },
      {
        path: 'releaseom',
        loadChildren: './views/releaseom/releaseom.module#ReleaseomModule'
      },
      { 
        path: 'velocitecare',
        loadChildren: './views/velocitecare/velocitecare.module#VelocitecareModule'
      },
      { 
        path: 'coutbudgetcare',
        loadChildren: './views/coutbudgetcare/coutbudgetcare.module#CoutbudgetcareModule'
      },
      { 
        path: 'cadigital',
        loadChildren: './views/cadigital/cadigital.module#CadigitalModule'
      },
    ]
  }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
