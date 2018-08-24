import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { DataService } from "../sharing-data-service";
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  templateUrl: 'releasecare.component.html',
})
export class ReleasecareComponent  implements OnInit {

  constructor(private router: Router, private data: DataService,@Inject(LOCAL_STORAGE) private storage: WebStorageService) {}

  objectKeys = Object.keys;
  public datas :any ;

  ngOnInit(): void {
      // this.datas = this.data.getMessage();
      // console.log("test data", this.datas)
      //this.data.currentMessage.subscribe(message => this.datas = message)
      this.datas = [
        {
          "TYPE": "NOM",
          "IMAGE": "release-name.png",
          "DATAS": 
          [
            {
              "LIB": "Release 1 (MVP)",
            },
            {
              "LIB": "Release 2 (POST MVP)",
            },
          ]
        },
        {
          "TYPE": "DATE",
          "IMAGE": "release-date.png",
          "DATAS": 
          [
            {
              "LIB": "NC",
            },
            {
              "LIB": "NC",
            },
          ]
        },
        {
          "TYPE": "OBJECTIFS",
          "IMAGE": "release-goal.png",
          "DATAS": 
          [
            {
              "LIB": "Permettre à nos utilisateurs actuels de se retrouver  / Créer l’autonomie et la visibilité",
            },
            {
              "LIB": "Fidéliser/Rendre irrésistible",
            },
          ]
        },
        {
          "TYPE": "FONCTIONNALITES",
          "IMAGE": "release-features.png",
          "DATAS": 
          [
            {
              "LIB": "<li>Gestion de la flotte mobile (Parc / Suivi conso/ Gestion des services)</li><li>Facturation (fiabilité du récapitulatif)</li><li>Commandes</li><li>Assistance/Chat online</li>",
            },
            {
              "LIB": "<li>Interfaçage avec E-Shop</li><li>Analytics</li><li>Améliorations des alertes</li><li>Dépôt et suivi demande/réclamations</li><li>Gamification</li>",
            },
          ]
        },
        {
          "TYPE": "METRICS",
          "IMAGE": "release-metrics.png",
          "DATAS": 
          [
            {
              "LIB": "<li>Audience</li><li>Active users</li><li>NPS</li><li>Taux de satisfaction des clients</li>",
            },
            {
              "LIB": "<li>Audience</li><li>Active users</li><li>Taux d'utilisation des fonctionnalités</li><li>NPS</li><li>Taux de satisfaction des clients</li><li>Apport d'affaire au E-SHOP</li>",
            },
          ]
        },
      ]
//      console.log("test", this.datas)
  }

}
