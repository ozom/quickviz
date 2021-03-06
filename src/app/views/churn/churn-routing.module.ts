import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { ChurnComponent } from './churn.component';

const routes: Routes = [
  {
    path: '',
    component: ChurnComponent,
    data: {
      title: 'Churn'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChurnRoutingModule {}
