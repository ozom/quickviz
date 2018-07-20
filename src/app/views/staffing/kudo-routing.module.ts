import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { MoodboardComponent } from './kudo.component';

const routes: Routes = [
  {
    path: '',
    component: MoodboardComponent,
    data: {
      title: 'Staffing'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoodboardRoutingModule {}
