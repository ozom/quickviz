import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { HttpClient } from '@angular/common/http';
import {IMyDpOptions} from 'mydatepicker';
@Component({
  templateUrl: 'kudo.component.html'
})
export class MoodboardComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd / mm / yyyy',
};

// Initialized to specific date (09.10.2018).
public start_date: any = { date: { year: (new Date((new Date).getTime() - 2678400000)).getFullYear(), month: (new Date((new Date).getTime() - 2678400000)).getMonth()+1, day: (new Date((new Date).getTime() - 2678400000)).getDate() } };
public end_date: any = { date: { year: (new Date).getFullYear(), month: (new Date).getMonth()+1 , day: (new Date).getDate() } };



  constructor(private http: HttpClient){}

  // lineChart1
  
  


  //bar chart

 // Pie
 public pieChartLabels:string[] = [];
 public pieChartData:number[] = [100, 0];
 public pieChartData1:number[] = [10, 90];
 public pieChartData2:number[] = [10, 90];
 public pieChartData3:number[] = [0, 100];
 public pieChartData4:number[] = [60, 40];
 public pieChartData5:number[] = [40, 60];
 public pieChartType:string = 'pie';

 public pieChartColors: Array < any > = [{
  backgroundColor: ['green', 'LightGrey  '],
}];
public pieChartColors2: Array < any > = [{
  backgroundColor: ['red', 'LightGrey  '],
}];
public pieChartColors3: Array < any > = [{
  backgroundColor: ['gold', 'LightGrey  '],
}];

 // events
 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }



  ngOnInit(): void {
    //this.get_products()
    //console.log("test date", (new Date(""+this.start_date['date']['year'] + "/"+ this.start_date['date']['month']+"/"+this.start_date['date']['day'])).getTime())
  }


  radioModel: string = 'Day';
}
