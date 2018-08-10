import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { EpicbmComponent } from './epicbm.component';

const routes: Routes = [
  {
    path: '',
    component: EpicbmComponent,
    data: {
      title: 'Evolution des épics du projet'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpicbmRoutingModule {}
