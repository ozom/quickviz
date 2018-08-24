import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Injectable } from '@angular/core';
import { Component, OnInit , Inject } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { navItems } from './../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, public router: Router) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized')
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  public logout(){
        this.storage.set("logged", false);
        //this.router.navigate(['login']);
      }

}