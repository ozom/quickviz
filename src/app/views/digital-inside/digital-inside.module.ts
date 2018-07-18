import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DigitalInsideComponent } from './digital-inside.component';
import { DigitalInsideRoutingModule } from './digital-inside-routing.module';

@NgModule({
  imports: [
    FormsModule,
    DigitalInsideRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ DigitalInsideComponent ]
})
export class DigitalInsideModule { }
