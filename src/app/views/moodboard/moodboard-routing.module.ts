import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { MoodboardComponent } from './moodboard.component';

const routes: Routes = [
  {
    path: '',
    component: MoodboardComponent,
    data: {
      title: 'Moodboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoodboardRoutingModule {}
