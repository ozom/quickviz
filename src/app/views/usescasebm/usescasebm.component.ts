import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { DataService } from "../sharing-data-service";
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  templateUrl: 'usescasebm.component.html',
})
export class UsescasebmComponent  implements OnInit {

  constructor(private router: Router, private data: DataService,@Inject(LOCAL_STORAGE) private storage: WebStorageService) {}

  objectKeys = Object.keys;
  public datas :any ;

  ngOnInit(): void {
      // this.datas = this.data.getMessage();
      // console.log("test data", this.datas)
      //this.data.currentMessage.subscribe(message => this.datas = message)
      this.datas = [
  {
    "CATEGORIE": "CA",
    "TYPE": "RECHARGE",
    "UC": "CA Recharge (Par canal de recharge / par segment / par formule / par localisation / par période (hourly, daily, weekly, monthly, yearly )",
    "pourcentage": "49%",
  },
  {
    "CATEGORIE": "CA",
    "TYPE": "VOIX",
    "UC": "CA voix   ( par destination / par formule / par localisation / par période (hourly, daily, weekly, monthly, yearly)",
    "pourcentage": "24%",
  },
 {
    "CATEGORIE": "CA",
    "TYPE": "DATA",
    "UC": "CA  data  ( par canal, par formule / par localisation / par période (hourly, daily, weekly, monthly, yearly)",
    "pourcentage": "24%",
  },
  {
    "CATEGORIE": "CA",
    "TYPE": "VAS",
    "UC": "CA VAS (par localisation / par formule / période (hourly, daily, weekly, monthly, yearly)",
    "pourcentage": "24%",
  },
  {
    "CATEGORIE": "TRAFIC",
    "TYPE": "VOIX",
    "UC": "Trafic voix (en nombre d'appels) (par destination / par sens d’appel / par localisation / par formule / par période (hourly, daily, weekly, monthly, yearly))",
    "pourcentage": "49%",
  },
  {
    "CATEGORIE": "TRAFIC",
    "TYPE": "VOIX",
    "UC": "Trafic voix (durée en minute) (par destination / par sens d’appel / par localisation / par formule / par période (hourly, daily, weekly, monthly, yearly))",
    "pourcentage": "49%",
  },
  {
    "CATEGORIE": "TRAFIC",
    "TYPE": "VOIX",
    "UC": "Trafic voix (parc) (par destination / par sens d’appel / par localisation / par formule / par période (hourly, daily, weekly, monthly, yearly))",
    "pourcentage": "30%",
  },
  {
    "CATEGORIE": "TRAFIC",
    "TYPE": "DATA",
    "UC": "Trafic data (possibilité de choisir l’unité Go, Mo, Ko) (2G / 3G / 4G) (par formule/ par localisation / par période (hourly, daily, weekly, monthly, yearly)",
    "pourcentage": "30%",
  },
  {
    "CATEGORIE": "TRAFIC",
    "TYPE": "DATA",
    "UC": "Parc actif sur 30j par réseau (2G/3G/4G) / par localisation / par période (hourly, daily, weekly, monthly, yearly)",
    "pourcentage": "30%",
 },
  {
    "CATEGORIE": "PARC",
    "TYPE": "DATA",
    "UC": "Parc actif 30j data global / par localisation / par période (hourly, daily, weekly, monthly, yearly)",
    "pourcentage": "24%",
  },
  {
    "CATEGORIE": "PARC",
    "TYPE": "RECHARGE",
    "UC": "Parc 30j recharge (par formule, par localisation)",
    "pourcentage": "24%",
  },
  {
    "CATEGORIE": "PARC",
    "TYPE": "RECHARGE",
    "UC": "Parc 1j recharge (par formule, par localisation) (historique a un mois)",
    "pourcentage": "24%",
  },
  {
    "CATEGORIE": "PARC",
    "TYPE": "UTILISATEUR",
    "UC": "Parc entrant hebdo",
    "pourcentage": "24%",
  },
  {
    "CATEGORIE": "PARC",
    "TYPE": "UTILISATEUR",
    "UC": "Parc sortant hebdo",
    "pourcentage": "24%",
  },
  {
    "CATEGORIE": "PARC",
    "TYPE": "UTILISATEUR",
    "UC": "Parc potentiel sortant hebdo",
    "pourcentage": "24%",
  },
  {
    "CATEGORIE": "REPRESENTATION",
    "TYPE": "CARTE",
    "UC": "Zone géographique en baisse de CA ( Déclinaison de la zone concernée avec la possibilité de forer dans la localisation jusqu’au niveau commune ; les quartier sont des points fixes associes aux BTS)",
    "pourcentage": "24%",
  },
  {
    "CATEGORIE": "REPRESENTATION",
    "TYPE": "CARTE",
    "UC": "Zone géographique en baisse de PDM (Déclinaison de la zone concernée / Déclinaison par formule) ",
    "pourcentage": "24%",
  },
  {
    "CATEGORIE": "REPRESENTATION",
    "TYPE": "CARTE",
    "UC": "Zone géographique en baisse trafic (Déclinaison :  par  zone concerné / par formule)",
    "pourcentage": "24%",
  },
]
      console.log("test", this.datas)
  }

}
