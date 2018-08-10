import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DataService } from "../sharing-data-service";
import { EpicareComponent } from './epicare.component';
import { EpicareRoutingModule } from './epicare-routing.module';
import {CommonModule} from '@angular/common';
 
@NgModule({
  imports: [
    FormsModule,
    EpicareRoutingModule,
    ChartsModule,
    CommonModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [EpicareComponent ],
  providers: [DataService]
})
export class EpicareModule { }
