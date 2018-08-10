import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { CoutbudgetbmComponent } from './coutbudgetbm.component';
import { CoutbudgetbmRoutingModule } from './coutbudgetbm-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CoutbudgetbmRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [CoutbudgetbmComponent]
})
export class CoutbudgetbmModule { }
