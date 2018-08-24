import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Injectable } from '@angular/core';
import { Component, OnInit , Inject } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

public code : Int16Array ;
public show : boolean = false
constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, public router: Router) { }

  public authenticate(password){
      if (password == 1111) {
        console.log("logged with", password)
        this.storage.set("logged", true);
        this.router.navigate(['dashboard']);
      } else {
        this.show = true
        setTimeout(()=>{ this.show = false }, 4000)
      }
    }

 }
