import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { MobileComponent2 } from './mobile.component2';
import { MobileRouting2Module } from './mobile-routing.module';

@NgModule({
  imports: [
    FormsModule,
    MobileRouting2Module,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [MobileComponent2]
})
export class MobileModule { }
