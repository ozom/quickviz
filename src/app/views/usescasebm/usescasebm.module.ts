import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DataService } from "../sharing-data-service";
import { UsescasebmComponent } from './usescasebm.component';
import { UsescasebmRoutingModule } from './usescasebm-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    UsescasebmRoutingModule,
    ChartsModule,
    CommonModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [UsescasebmComponent ],
  providers: [DataService]
})
export class UsescasebmModule { }
