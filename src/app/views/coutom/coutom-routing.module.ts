import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { CoutomComponent } from './coutom.component';

const routes: Routes = [
  {
    path: '',
    component: CoutomComponent,
    data: {
      title: 'Cout et Budget feature team Orange Money'
    }
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoutomRoutingModule {}
