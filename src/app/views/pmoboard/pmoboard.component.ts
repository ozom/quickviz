import { Component, OnInit , Inject } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { DataService } from "../sharing-data-service";
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  templateUrl: 'pmoboard.component.html',

})
export class PmoboardComponent  implements OnInit {

  constructor(private router: Router, private data: DataService, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  public chartHovered (event){
    //do nothing
  }

  public chartClicked (event){
    console.log("event",event)
    var datasetIndex = event['active'][0]["_datasetIndex"]
    var index = event['active'][0]["_index"]
    var data1 = event['active'][0]["_chart"]["config"]["data"]["datasets"][datasetIndex]["data"][index]["comment"]
    this.storage.set("test", data1);
    console.log('test 1', data1)
    this.router.navigate(['pmoboard-details']);
  }

  // lineChart1
  public chartOptions: any = {
          scales: {
              yAxes: [{
                scaleLabel: {
                display: true,
                labelString: 'IMPORTANCE',
                fontColor : "blue",
                fontSize : "15"
              },
                gridLines: {
                    zeroLineWidth : 5,
                    zeroLineColor : "black",
                },
                  ticks: {
                      beginAtZero: false,
                      min : -5,
                      steps : 5,
                      max : 5,
                  }
              }],
              xAxes: [{
                scaleLabel: {
                display: true,
                labelString: 'URGENCE',
                fontColor : "blue",
                fontSize : "15"
              },
                gridLines: {
                    zeroLineWidth:5,
                    zeroLineColor : "black",
                },
                  ticks: {
                      beginAtZero: false,
                      min : -5,
                      steps : 5,
                      max : 5,
                  }
              }],
          },
          maintainAspectRatio: false,
          responsive: true,
          tooltips: {
            mode : 'single',

    callbacks: {
        label: function(tooltipItem, data) {

            var temp = data.datasets[tooltipItem.datasetIndex]["data"][tooltipItem.index]["comment"]
                var label = '';
                let value = temp["libellé"];
                label = label + " " + "libellé" + " : " + value
            return label ;
        }
    }
},
      }
  public ChartLegend:boolean = true;
  public ChartType:string = 'bubble';
  public ChartData:any[] = [
    {data:[
      , {
  x: 4.5,
  y: 4,
  r: 15,
  "comment": {"date" : "23/08/2018",
        "libellé" : "Disponibilité des ressources webservice DSI",
        "Description" : "Disponibilité ASAP des ressources webservice DSI à 2 fois 3H par semaine",
        //"Localisation" : "One roof",
        //"Impact" : "Blocage",
        //"Plaignant": "DD",
        "Porteur" : "DSI"
        }
},
{
x: 3,
y: 4,
r: 15,
"comment": {"date" : "08/08/2018",
  "libellé" : "Disponibilité intégrateur HTML",
  "Description" : "En attendant la proposition de YUX sur l'intégration des maquettes, DSI doit voir avec ATOS la mise à disposition d'un inégrateur HTML.",
  //"Localisation" : "One roof",
  //"Impact" : "Blocage",
  //"Plaignant": "DD",
  "Porteur" : "DSI"
  }
},
{
  x: 2,
  y: 3,
  r: 15,
  "comment": {"date" : "23/08/2018",
        "libellé" : "Mise à disposition d'un administrateur système & base de données sur le canal OM au One Roof",
        "Description" : "La DSI doit assurer la disponibilité de l'administrateur système & base de données pour l'exploitation des machines virtuelles (Simon David Wallabregue).",
        //"Localisation" : "One roof",
        //"Impact" : "Blocage",
        //"Plaignant": "DD",
        "Porteur" : "DSI"
        }
},
{
  x: 3,
  y: 2,
  r: 15,
  "comment": {"date" : "12/07/2018",
        "libellé" : "Les SLA de la DSI sont trops longs",
        "Description" : "Sur le point d'inter-fonctionnement DSI/DD, les SLA proposés par DSI sont trop longs.",
        //"Localisation" : "One roof",
        //"Impact" : "Blocage",
        //"Plaignant": "DD",
        "Porteur" : "DSI"
        }
},
{
x: 1,
y: 2,
r: 15,
"comment": {"date" : "19/07/2018",
  "libellé" : "Pas d'accès Tango pour la ressource DRPS détachée au pôle",
  "Description" : "Le ressource DRPS détachée au pôle pour accompagner l'équipe OM dans les actions d'interfaçage avec la plateforme Tango n'a plus les accès depuis son arrivée. A noter qu'elle les avait avant son détachement.",
  //"Localisation" : "One roof",
  //"Impact" : "Blocage",
  //"Plaignant": "DD",
  "Porteur" : "DRPS/DEX"
  }
}

],
      label:'Blocage',
      backgroundColor:'rgba(226, 0, 0, 0.9)', // vert
      hoverBackgroundColor:'rgba(226, 0, 0, 0.9)'},
    {
      data:[],
      label:'Important',
      backgroundColor:'#fefe32', //jaune
      hoverBackgroundColor:'#fefe32'
    },
  {
    data:[],
    label:'Urgence',
    backgroundColor:'rgba(226, 113, 0, 0.9)', //orange
    hoverBackgroundColor:'rgba(226, 113, 0, 0.9)'
  },
{
  data:[,
  {
    x: '-1',
    y: '-1',
    r: 15,
    "comment": {"date" : "07/07/2018",
              "libellé" : "Mise à disposition des données pour les datascientistes",
              "Description" : "Le problème est en cours de résolution coté DSI avec la mise à disposition de datamart. Cible : Plateforme bigdata iso prod à mettre à disposition pour les datascientistes",
              //"Localisation" : "One roof",
              //"Impact" : "Blocage",
              //"Plaignant": "DD",
              "Porteur" : "DSI"
            },


  }
],
  label:'Risque',
  backgroundColor:'#4cf03b',
  hoverBackgroundColor:'#4cf03b' //rouge
}
  ];



  ngOnInit(): void {

  }


  radioModel: string = 'Day';
}
