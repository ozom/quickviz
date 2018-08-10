import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { UsescasebmComponent } from './usescasebm.component';

const routes: Routes = [
  {
    path: '',
    component: UsescasebmComponent,
    data: {
      title: 'Evolution des uses case'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsescasebmRoutingModule {}
