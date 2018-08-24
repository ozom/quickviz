import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { ReleasecareComponent } from './releasecare.component';

const routes: Routes = [
  {
    path: '',
    component: ReleasecareComponent,
    data: {
      title: 'Plan de release SlefCare B2B'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleasecareRoutingModule {}
