import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DigitalInsideComponent } from './digital-inside.component';

const routes: Routes = [
  {
    path: '',
    component: DigitalInsideComponent,
    data: {
      title: 'E-SHOP'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalInsideRoutingModule {}
