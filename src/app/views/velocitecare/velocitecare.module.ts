import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { VelocitecareComponent } from './velocitecare.component';
import { VelocitecareRoutingModule } from './velocitecare-routing.module';

@NgModule({
  imports: [
    FormsModule,
    VelocitecareRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [VelocitecareComponent]
})
export class VelocitecareModule { }
