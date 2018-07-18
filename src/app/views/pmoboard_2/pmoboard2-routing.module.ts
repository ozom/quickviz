import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { Pmoboard2Component } from './pmoboard2.component';

const routes: Routes = [
  {
    path: '',
    component: Pmoboard2Component,
    data: {
      title: 'Obstacle Board detail'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pmoboard2RoutingModule {}
