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
          "EPIC": "Gestion point de vente",
          "pourcentage": "0%",
        },
        {
          "EPIC": "Gestion des tableaux de bord et des accès",
          "pourcentage": "0%",
        },
        {
          "EPIC": "Gestion des commerciaux",
          "pourcentage": "0%",
        },
        {
          "EPIC": "Paramétrage de l'application",
          "pourcentage": "0%",
        },
        {
          "EPIC": "Suivi des KPIs de la distribution",
          "pourcentage": "0%",
        },
      ]
      console.log("test", this.datas)
  }

}
