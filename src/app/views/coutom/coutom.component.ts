import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

@Component({ 
  templateUrl: 'coutom.component.html'
})
export class CoutomComponent implements OnInit {

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
  public pieChartLabels:string[] = ['Dev ATOS', 'Dev MNS', 'OPS Sonatel', 'Scrum Master Sonatel', 'Product Owner Sonatel', 'Architect Logiciel ATOS', 'Architect Solution ATOS', 'Lead Technique Sonatel'];
  public pieChartData:number[] = [30.6, 4.9, 1.8, 1.5, 1.4, 4.8, 1.8, 1.1];
  public pieChartType:string = 'pie';
  public pieChartColors: Array < any > = [{
    backgroundColor: ['#3B64AD', '#DF0000', '#E2AA00', '#62993E', '#FF6600', '#F1A78A', '#A352A3', '#AA7300'],
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
    {'data' : [5.9] , 'label' : "SONATEL"},
    {'data' : [37.2] , 'label' : "ATOS"},
    {'data' : [4.9] , 'label' : "MNS"},
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
