import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { B2cComponent } from './b2c.component';
import { B2cRoutingModule } from './b2c-routing.module';

@NgModule({
  imports: [
    FormsModule,
    B2cRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [B2cComponent]
})
export class B2cModule { }
