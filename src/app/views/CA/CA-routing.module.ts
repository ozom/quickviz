import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { CAComponent } from './CA.component';

const routes: Routes = [
  {
    path: '',
    component: CAComponent,
    data: {
      title: "Folloaw chiffre d'affaire"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CARoutingModule {}
