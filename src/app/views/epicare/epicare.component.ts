import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { DataService } from "../sharing-data-service";
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  templateUrl: 'epicare.component.html',
})
export class EpicareComponent  implements OnInit {

  constructor(private router: Router, private data: DataService,@Inject(LOCAL_STORAGE) private storage: WebStorageService) {}

  objectKeys = Object.keys;
  public datas :any ;

  ngOnInit(): void {
      // this.datas = this.data.getMessage();
      // console.log("test data", this.datas)
      //this.data.currentMessage.subscribe(message => this.datas = message)
      this.datas = [
        {
          "EPIC": "Inscription utilisateurs",
          "pourcentage": "0%",
        },
        {
          "EPIC": "Achat - transfert de crédit",
          "pourcentage": "0%",
        },
        {
          "EPIC": "Adminsitration",
          "pourcentage": "0%",
        },
        {
          "EPIC": "Gestion Flotte",
          "pourcentage": "0%",
        },
        {
          "EPIC": "Suivi Consomation",
          "pourcentage": "0%",
        },
        {
          "EPIC": "Facture",
          "pourcentage": "0%",
        },
        {
          "EPIC": "Analytics",
          "pourcentage": "0%",
        },
        {
          "EPIC": "Tableau de board",
          "pourcentage": "0%",
        },
        {
          "EPIC": "Autres services",
          "pourcentage": "0%",
        },
      ]
      console.log("test", this.datas)
  }

}
