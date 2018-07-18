import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DataService } from "../sharing-data-service";
import { Pmoboard2Component } from './pmoboard2.component';
import { Pmoboard2RoutingModule } from './pmoboard2-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    Pmoboard2RoutingModule,
    ChartsModule,
    CommonModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [Pmoboard2Component ],
  providers: [DataService]
})
export class Pmoboard2Module { }
