import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { CoutbudgetcareComponent } from './coutbudgetcare.component';

const routes: Routes = [
  {
    path: '',
    component: CoutbudgetcareComponent,
    data: {
      title: 'Cout et Budget feature team Business Monitoring'
    }
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoutbudgetcareRoutingModule {}
