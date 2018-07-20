import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { DataService } from "../sharing-data-service";
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  templateUrl: 'epique.component.html',
})
export class Pmoboard2Component  implements OnInit {

  constructor(private router: Router, private data: DataService,@Inject(LOCAL_STORAGE) private storage: WebStorageService) {}

  objectKeys = Object.keys;
  public datas :any ;

  ngOnInit(): void {
      // this.datas = this.data.getMessage();
      // console.log("test data", this.datas)
      //this.data.currentMessage.subscribe(message => this.datas = message)
      this.datas = [
  {
    "EPIC": "Consultation Solde",
    "pourcentage": "25%",
  },
  {
    "EPIC": "Connexion",
    "pourcentage": "0%",
  },
  {
    "EPIC": "Rituels scrum",
    "pourcentage": "0%",
  },
  {
    "EPIC": "Transfert",
    "pourcentage": "0%",
  },
  {
    "EPIC": "exigences non fonctionnelles",
    "pourcentage": "14%",
  },
  {
    "EPIC": "Paiement de Factures",
    "pourcentage": "0%",
  },
  {
    "EPIC": "Achat Pass",
    "pourcentage": "0%",
  },
  {
    "EPIC": "Transferts Bancaires",
    "pourcentage": "0%",
  },
  {
    "EPIC": "Page d'accueil",
    "pourcentage": "0%",
 },
  {
    "EPIC": "Paiement Marchand",
    "pourcentage": "0%",
  },
  {
    "EPIC": "Espace mon Compte",
    "pourcentage": "0%",
  },
  {
    "EPIC": "Création de compte Orange Money",
    "pourcentage": "0%",
  },
  {
    "EPIC": "Historique des transactions",
    "pourcentage": "0%",
  },
  {
    "EPIC": "Notifications",
    "pourcentage": "0%",
  },
  {
    "EPIC": "Assistance",
    "pourcentage": "0%",
  },
  {
    "EPIC": "Points OM",
    "pourcentage": "0%",
  },
  {
    "EPIC": "Dons",
    "pourcentage": "0%",
  },
  {
    "EPIC": "Vocal",
    "pourcentage": "0%",
  },
  {
    "EPIC": "Invitations",
    "pourcentage": "0%",
  },
  {
    "EPIC": "Consultation Solde",
    "pourcentage": "0%",
  },
  {
    "EPIC": "SDE",
    "pourcentage": "0%",
  },
  {
    "EPIC": "SONATEL",
    "pourcentage": "0%",
  },
  {
    "EPIC": "Woyofal",
    "pourcentage": "0%",
  },
  {
    "EPIC": "Canal+",
    "pourcentage": "0%",
  },
  {
    "EPIC": "Rapido",
    "pourcentage": "0%",
  },
  {
    "EPIC": "Senelec",
    "pourcentage": "0%",
  },
  {
    "EPIC": "J'accede à la homepage en mode non connecté",
    "pourcentage": "0%",
  }
]
      console.log("test", this.datas)
  }

}
