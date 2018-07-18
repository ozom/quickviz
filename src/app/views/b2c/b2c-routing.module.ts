import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { B2cComponent } from './b2c.component';

const routes: Routes = [
  {
    path: '',
    component: B2cComponent,
    data: {
      title: 'SelfCare B2C'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B2cRoutingModule {}
