import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DataService } from "../sharing-data-service";
import { ReleaseomComponent } from './releaseom.component';
import { ReleaseomRoutingModule } from './releaseom-routing.module';
import {CommonModule} from '@angular/common';
 
@NgModule({
  imports: [
    FormsModule,
    ReleaseomRoutingModule,
    ChartsModule,
    CommonModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ReleaseomComponent ],
  providers: [DataService]
})
export class ReleaseomModule { }
