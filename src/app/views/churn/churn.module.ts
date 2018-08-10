import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';  
import { ChurnComponent } from './churn.component';
import { ChurnRoutingModule } from './churn-routing.module';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    FormsModule,
    ChurnRoutingModule,
    ChartsModule,
    CommonModule,
    MyDatePickerModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ ChurnComponent ]
})
export class ChurnModule { }
