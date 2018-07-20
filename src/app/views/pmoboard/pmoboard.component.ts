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
  x: 4,
  y: 1,
  r: 15,
  "comment": {"date" : "04/07/2018",
        "libellé" : "Sécurisation du plan de staffing IBM & ATOS",
        "Description" : "Plan de staffing global IBM & ATOS pas encore effectif sauf pour le selfcare B2B (prévue le 09/07) Orange Money (ok).",
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
  "comment": {"date" : "12/07/2018",
        "libellé" : "Mise à disposition des ressources au One Roof (OPS)",
        "Description" : "Selon les discussions avec la DSI, la disponibilité de l'exploitant (OPS) n'est pas garantie",
        //"Localisation" : "One roof",
        //"Impact" : "Blocage",
        //"Plaignant": "DD",
        "Porteur" : "DSI"
        }
},
{
  x: 4,
  y: 4,
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
x: 4,
y: 1,
r: 15,
"comment": {"date" : "04/07/2018",
  "libellé" : "Selfcare B2C : disponibilité RH",
  "Description" : "Projet gelé. En attente du retour du contributeur backend (malade).  ",
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
  "Description" : "Le ressource DRPS détachée au pôle pour accompagner l'équipe OM dans les actions d'interfaçage avec la plateforme Tango n'a plus les accès depuis au arrivée. A noter qu'elle les avait avant son détanchement.",
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
