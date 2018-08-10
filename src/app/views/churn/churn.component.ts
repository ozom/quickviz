import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { HttpClient } from '@angular/common/http';
import {IMyDpOptions} from 'mydatepicker';
@Component({
  templateUrl: 'churn.component.html'
})
export class ChurnComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd / mm / yyyy',
};

public datas :any ;
public datasim :any ;
public dataom :any ;

// Initialized to specific date (09.10.2018).
public start_date: any = { date: { year: (new Date((new Date).getTime() - 2678400000)).getFullYear(), month: (new Date((new Date).getTime() - 2678400000)).getMonth()+1, day: (new Date((new Date).getTime() - 2678400000)).getDate() } };
public end_date: any = { date: { year: (new Date).getFullYear(), month: (new Date).getMonth()+1 , day: (new Date).getDate() } };



  constructor(private http: HttpClient){}

  // lineChart1
  
  


  //bar chart

 // Pie
 public pieChartLabels:string[] = ['INF_STAR', 'INF_VIP', 'INF_LEADER', 'INF_SIMPLE', 'FOLLOWERS'];
 public pieChartData1:number[] = [1.5, 9.1, 15.5, 46.9, 27];
 public pieChartData2:number[] = [9, 25, 23, 34, 10];
 public pieChartData3:number[] = [];
 public pieChartType:string = 'pie';

 public pieChartLabelSim:string[] = ['1 SIM', '2 SIM', '3 SIM'];
 public pieChartDataSim:number[] = [78, 19, 3];

 public pieChartLabelOM:string[] = ['Pas OM', 'OM'];
 public pieChartDataOM:number[] = [75, 25];
 
 public pieChartLabelsRFM:string[] = ['Très Faible', 'Faible', 'Moyen', 'Bon Client', 'Très Bon Client'];
 public pieChartDataParcRFM:number[] = [23, 35, 21, 9, 12];
 public pieChartDataCaRFM:number[] = [2, 13, 21, 17, 47];





  public pieChartColors: Array < any > = [{
    backgroundColor: ['#3B64AD', '#FF6600', '#62993E', '#E2AA00', '#A352A3', '#F1A78A', '#DF0000', '#AA7300'],
  }];

 // events
 public chartClicked(e:any):void {
   //console.log(e);
 }

 public chartHovered(e:any):void {
   //console.log(e);
 }



  ngOnInit(): void {
    //this.get_products()
    //console.log("test date", (new Date(""+this.start_date['date']['year'] + "/"+ this.start_date['date']['month']+"/"+this.start_date['date']['day'])).getTime())

    this.datas = [
      {
        "name": "INF_STAR",
        "arpu": "23 015",
        "churn": "1%",
      },
      {
        "name": "INF_VIP",
        "arpu": "10 684",
        "churn": "2%",
      },
      {
        "name": "INF_LEADER",
        "arpu": "5 820",
        "churn": "5%",
      },
      {
        "name": "INF_SIMPLE",
        "arpu": "2 814",
        "churn": "12%",
      },
      {
        "name": "FOLLOWERS",
        "arpu": "1 400",
        "churn": "19%",
      },
    ]

    this.datasim = [
      {
        "name": "1 SIM",
        "arpu": "1 854",
        "churn": "15%",
      },
      {
        "name": "2 SIM",
        "arpu": "2 130",
        "churn": "8%",
      },
      {
        "name": "3 SIM",
        "arpu": "2 183",
        "churn": "7%",
      },
    ]

    this.dataom = [
      {
        "name": "Pas OM",
        "arpu": "1 655",
        "churn": "16%",
      },
      {
        "name": "OM",
        "arpu": "2 766",
        "churn": "5%",
      },
    ]
  }


  radioModel: string = 'Day';
}
