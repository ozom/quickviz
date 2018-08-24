import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { CadigitalComponent } from './cadigital.component';
import { CadigitalRoutingModule } from './cadigital-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CadigitalRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [CadigitalComponent]
})
export class CadigitalModule { }
