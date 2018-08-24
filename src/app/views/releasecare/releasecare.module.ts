import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DataService } from "../sharing-data-service";
import { ReleasecareComponent } from './releasecare.component';
import { ReleasecareRoutingModule } from './releasecare-routing.module';
import {CommonModule} from '@angular/common';
 
@NgModule({
  imports: [
    FormsModule,
    ReleasecareRoutingModule,
    ChartsModule,
    CommonModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ReleasecareComponent ],
  providers: [DataService]
})
export class ReleasecareModule { }
