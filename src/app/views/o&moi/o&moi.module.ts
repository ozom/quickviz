import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { MobileComponent } from './o&moi.component';
import { OmoiRoutingModule } from './o&moi-routing.module';

@NgModule({
  imports: [
    FormsModule,
    OmoiRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [MobileComponent]
})
export class MobileModule { }
