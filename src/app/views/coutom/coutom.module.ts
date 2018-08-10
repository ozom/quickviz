import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { CoutomComponent } from './coutom.component';
import { CoutomRoutingModule } from './coutom-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CoutomRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [CoutomComponent]
})
export class CoutomModule { }
