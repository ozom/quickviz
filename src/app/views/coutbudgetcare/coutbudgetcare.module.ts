import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { CoutbudgetcareComponent } from './coutbudgetcare.component';
import { CoutbudgetcareRoutingModule } from './coutbudgetcare-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CoutbudgetcareRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [CoutbudgetcareComponent]
})
export class CoutbudgetcareModule { }
