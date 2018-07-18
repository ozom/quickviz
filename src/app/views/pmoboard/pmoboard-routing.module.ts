import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { PmoboardComponent } from './pmoboard.component';

const routes: Routes = [
  {
    path: '',
    component: PmoboardComponent,
    data: {
      title: 'Obstacle Board'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PmoboardRoutingModule {}
