import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { MobileComponent } from './mobile.component';

const routes: Routes = [
  {
    path: '',
    component: MobileComponent,
    data: {
      title: 'Vélocité'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule {}
