import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { CadigitalComponent } from './cadigital.component';

const routes: Routes = [
  {
    path: '',
    component: CadigitalComponent,
    data: {
      title: "Suivi du chiffre d'affaire digital"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadigitalRoutingModule {}
