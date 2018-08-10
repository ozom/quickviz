import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

@Component({ 
  templateUrl: 'coutbudgetcare.component.html'
})
export class CoutbudgetcareComponent implements OnInit {

  // lineChart1
  constructor(private router: Router) { }
 
  public chartHovered (event){
    //do nothing
  }

  public chartClicked (event){

    //this.router.navigate(['velocite-details']);
  }

  public barChartLabels: string[] = ['juillet-18'];
  public barChartType = 'bar';
  public barChartLegend = true;
  
// Pie
  public pieChartLabels:string[] = ['Product Owner Sonatel', 'Scrum Master IBM', 'Coach IBM', 'Dev IBM', 'Architecte Solution IBM', 'OPS IBM', 'Testeur IBM'];
  public pieChartData:number[] = [1.5, 3.1, 4.2, 3, 1.5, 0, 0];
  public pieChartType:string = 'pie';
  public pieChartColors: Array < any > = [{
    backgroundColor: ['#3B64AD', '#62993E', '#DF0000', '#E2AA00', '#FF6600', '#F1A78A', '#A352A3', '#AA7300'],
  }];

  public colors = [
    {
      backgroundColor: '#18B26B'
    },
    {
      backgroundColor: '#3B64AD'
    },
    {
      backgroundColor: '#DF0000'
    },
  ];

  public barChartData: any[] = [
    {'data' : [1.5] , 'label' : "SONATEL"},
    {'data' : [11.9] , 'label' : "IBM"},
  ];

  public barChartOptions: any = {
    scales: {
  xAxes: [{
    stacked: true
  }],
  yAxes: [{
    stacked: true
  }]
},
maintainAspectRatio: false,
legend: {
  display: true
},
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit(): void {
    // generate random values for mainChart
  }

  radioModel: string = 'Day';
}
