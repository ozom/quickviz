import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { CAComponent } from './CA.component';
import { CARoutingModule } from './CA-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CARoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [CAComponent]
})
export class CAModule { }
