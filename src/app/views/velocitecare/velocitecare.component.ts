import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

@Component({
  templateUrl: 'velocitecare.component.html'
})
export class VelocitecareComponent implements OnInit {

  // lineChart1
  constructor(private router: Router) { }
 
  public chartHovered (event){
    //do nothing
  }

  public chartClicked (event){

    //this.router.navigate(['velocite-details']);
  }

  public barChartLabels: string[] = ['Sprint 1'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public colors = [

    {
      backgroundColor: 'rgba(115, 113, 107, 0.9)'
    },
    {
      backgroundColor: 'rgba(51, 153, 51, 0.9)'
    },
    ];
  public barChartData: any[] = [
    {data: [23], label: 'Engagement'},
    {data: [0], label: 'Terminé'},

  ];

  ngOnInit(): void {
    // generate random values for mainChart
  }

  radioModel: string = 'Day';
}
