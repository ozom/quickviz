import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { MobileComponent2 } from './mobile.component2';

const routes: Routes = [
  {
    path: '',
    component: MobileComponent2,
    data: {
      title: 'Burndown Chart'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRouting2Module {}
