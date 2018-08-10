import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { CoutbudgetbmComponent } from './coutbudgetbm.component';

const routes: Routes = [
  {
    path: '',
    component: CoutbudgetbmComponent,
    data: {
      title: 'Cout et Budget feature team Business Monitoring'
    }
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoutbudgetbmRoutingModule {}
