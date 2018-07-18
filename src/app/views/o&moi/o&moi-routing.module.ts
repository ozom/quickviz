import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { MobileComponent } from './o&moi.component';

const routes: Routes = [
  {
    path: '',
    component: MobileComponent,
    data: {
      title: 'Orange & Moi'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmoiRoutingModule {}
