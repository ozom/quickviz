import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { VelocitecareComponent } from './velocitecare.component';

const routes: Routes = [
  {
    path: '',
    component: VelocitecareComponent,
    data: {
      title: 'Vélocité'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VelocitecareRoutingModule {}
