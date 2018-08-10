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
  public pieChartLabels:string[] = ['Scrum Master Sonatel', 'Product Owner Sonatel', 'Dev ATOS', 'Data Engineer ATOS', 'Integrateur ATOS', 'UI/UX Designer ATOS'];
  public pieChartData:number[] = [1.5, 1.5, 7.4, 6.9, 1, 1.2];
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
    {'data' : [3] , 'label' : "SONATEL"},
    {'data' : [16.6] , 'label' : "ATOS"},
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
