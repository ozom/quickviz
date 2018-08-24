import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { HttpClient } from '@angular/common/http';
import {IMyDpOptions} from 'mydatepicker';
@Component({
  templateUrl: 'moodboard.component.html'
})
export class MoodboardComponent implements OnInit {

  public chartHovered (event){
    //do nothing
  }

  public chartClicked (event){
    //do nothing
  }

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd / mm / yyyy',
};

// Initialized to specific date (09.10.2018).
public start_date: any = { date: { year: (new Date((new Date).getTime() - 2678400000)).getFullYear(), month: (new Date((new Date).getTime() - 2678400000)).getMonth()+1, day: (new Date((new Date).getTime() - 2678400000)).getDate() } };
public end_date: any = { date: { year: (new Date).getFullYear(), month: (new Date).getMonth()+1 , day: (new Date).getDate() } };



  constructor(private http: HttpClient){}

  // lineChart1
  public barChartData2: any[] = []
  public  show = false 
  get_products(){
    var today_mili = (new Date).getTime();
    this.show = false
    this.barChartData2 = []
    this.barChartLabels2 = []
    this.http.post('http://10.137.16.50:9200/moodboard/_search?pretty',{

      "sort": [
        {
          "Date": {
            "order": "asc",
            "unmapped_type": "boolean"
          }
        }
      ],
      "size" : 200,
      "query": {
        "bool": {
          "must": [
            {
              "query_string": {
                "analyze_wildcard": true,
                "query": "*"
              }
            },
            {
              "range": {
                "Date": {
                  "gte": (new Date(""+this.start_date['date']['year'] + "/"+ this.start_date['date']['month']+"/"+this.start_date['date']['day'])).getTime(),
                  "lte":(new Date(""+this.end_date['date']['year'] + "/"+ this.end_date['date']['month']+"/"+this.end_date['date']['day'])).getTime(),
                  "format": "epoch_millis"
                }
              }
            }
          ],
          "must_not": []
        }
      },
  }).subscribe((res)=>{
        //console.log(res);
        var raw_data = res["hits"]["hits"]
        console.log(raw_data)
        var data_tcolere = []
        var data_colere = []
        var data_neutre = []
        var data_heureux = []
        var data_theureux = []
        raw_data.forEach(element => {
          this.barChartLabels2.push(element["_source"]["Date"])
          data_tcolere.push(element["_source"]["tres en colere"]);
          data_colere.push(element["_source"]["colere"]);
          data_neutre.push(element["_source"]["neutre"]);
          data_heureux.push(element["_source"]["heureux"]);
          data_theureux.push(element["_source"]["tres heureux"]);
        });
        this.barChartData2.push({"data" : data_tcolere, 'label': 'Très en colère '})
        this.barChartData2.push({"data" : data_colere, 'label': 'Colère '})
        this.barChartData2.push({"data" : data_neutre, 'label': 'Neutre '})
        this.barChartData2.push({"data" : data_heureux, 'label': 'Heureux '})
        this.barChartData2.push({"data" : data_theureux, 'label': 'Trés Heureux '})
        console.log(this.barChartLabels2)
        console.log(this.barChartData2)
        this.show = true
    });
}

get_products2(){
  var today_mili = (new Date).getTime();
  this.show = false
  this.barChartData2 = []
  this.barChartLabels2 = []
  this.http.get('assets/data.json').subscribe((res)=>{
      //console.log(res);
      var raw_data = res["hits"]["hits"]
      raw_data = raw_data.reverse()
      console.log("raw data",raw_data)
      var data_tcolere = []
      var data_colere = []
      var data_neutre = []
      var data_heureux = []
      var data_theureux = []
      raw_data.forEach(element => {
        this.barChartLabels2.push(element["_source"]["Date"])
        data_tcolere.push(element["_source"]["tres en colere"]);
        data_colere.push(element["_source"]["colere"]);
        data_neutre.push(element["_source"]["neutre"]);
        data_heureux.push(element["_source"]["heureux"]);
        data_theureux.push(element["_source"]["tres heureux"]);
      });
      this.barChartData2.push({"data" : data_tcolere, 'label': 'Très en colère '})
      this.barChartData2.push({"data" : data_colere, 'label': 'Colère '})
      this.barChartData2.push({"data" : data_neutre, 'label': 'Neutre '})
      this.barChartData2.push({"data" : data_heureux, 'label': 'Heureux '})
      this.barChartData2.push({"data" : data_theureux, 'label': 'Trés Heureux '})
      console.log(this.barChartLabels2)
      console.log(this.barChartData2)
      this.show = true
  });
}


  //bar chart

  public colors = [
{
  backgroundColor: 'rgba(250, 0, 0, 0.9)'
},
{
  backgroundColor: 'rgba(255, 153, 0, 0.9)'
},
{
  backgroundColor: 'rgba(248, 242, 0, 0.9)'
},
{
  backgroundColor: 'rgba(0, 234, 0, 0.9)'
},
{
  backgroundColor: 'rgba(51, 153, 51, 0.9)'
},
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
  public barChartLabels2: string[] = [];
  
  public barChartType = 'bar';
  public barChartLegend = true;



  ngOnInit(): void {
    this.get_products()
    //this.get_products2()
    console.log("test date", (new Date(""+this.start_date['date']['year'] + "/"+ this.start_date['date']['month']+"/"+this.start_date['date']['day'])).getTime())
  }


  radioModel: string = 'Day';
}
