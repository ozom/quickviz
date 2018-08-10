import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DataService } from "../sharing-data-service";
import { EpicbmComponent } from './epicbm.component';
import { EpicbmRoutingModule } from './epicbm-routing.module';
import {CommonModule} from '@angular/common';
 
@NgModule({
  imports: [
    FormsModule,
    EpicbmRoutingModule,
    ChartsModule,
    CommonModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [EpicbmComponent ],
  providers: [DataService]
})
export class EpicbmModule { }
