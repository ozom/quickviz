import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { Pmoboard2Component } from './epique.component';

const routes: Routes = [
  {
    path: '',
    component: Pmoboard2Component,
    data: {
      title: 'Epique'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpiqueRoutingModule {}
