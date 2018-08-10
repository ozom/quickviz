import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { EpicareComponent } from './epicare.component';

const routes: Routes = [
  {
    path: '',
    component: EpicareComponent,
    data: {
      title: 'Evolution des épics du projet'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpicareRoutingModule {}
