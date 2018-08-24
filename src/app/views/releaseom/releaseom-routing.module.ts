import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { ReleaseomComponent } from './releaseom.component';

const routes: Routes = [
  {
    path: '',
    component: ReleaseomComponent,
    data: {
      title: 'Plan de release SlefCare B2B'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleaseomRoutingModule {}
