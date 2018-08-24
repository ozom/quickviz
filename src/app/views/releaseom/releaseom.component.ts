import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { DataService } from "../sharing-data-service";
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  templateUrl: 'releaseom.component.html',
})
export class ReleaseomComponent  implements OnInit {

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
          ]
        },
        {
          "TYPE": "OBJECTIFS",
          "IMAGE": "release-goal.png",
          "DATAS": 
          [
            {
              "LIB": "Reprise des fonctionnalités actuelles de l'application mobile et ussd  / Amélioration de l'expérience utilisateur",
            },
          ]
        },
        {
          "TYPE": "FONCTIONNALITES",
          "IMAGE": "release-features.png",
          "DATAS": 
          [
            {
              "LIB": "<li>Consultation solde</li><li>Transfert d'argent</li><li>Paiement factures (SONATEL, SDE, SENELEC, CANAL+, RAPIDO, WOYFAL)</li><li>Achat crédit / pass</li><li>Dons et cotisations</li><li>Bank to Wallet</li><Calculateur de frais</li><li>Care (Assitance)</li>",
            },
          ]
        },
        {
          "TYPE": "METRICS",
          "IMAGE": "release-metrics.png",
          "DATAS": 
          [
            {
              "LIB": "<li>Audience</li><li>Utilisateurs actifs</li><li>Taux d'échec d'opérations</li><li>Taux de disponibilité</li><li>Taux d'utilisation des fonctionnalités</li><li>Taux de satisfaction des clients</li>",
            },
          ]
        },
      ]
//      console.log("test", this.datas)
  }

}
