import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';  
import { MoodboardComponent } from './kudo.component';
import { MoodboardRoutingModule } from './kudo-routing.module';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    FormsModule,
    MoodboardRoutingModule,
    ChartsModule,
    CommonModule,
    MyDatePickerModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ MoodboardComponent ]
})
export class MoodboardModule { }
