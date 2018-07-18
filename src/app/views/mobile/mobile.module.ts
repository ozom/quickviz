import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { MobileComponent } from './mobile.component';
import { MobileRoutingModule } from './mobile-routing.module';

@NgModule({
  imports: [
    FormsModule,
    MobileRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [MobileComponent]
})
export class MobileModule { }
