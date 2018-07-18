import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  // changeMessage(message : any[]) {
  //   //this.messageSource = message
  //   console.log("chage donne with :", message);
  //   console.log("new message : ", this.messageSource)
  // }
  private messageSource = new BehaviorSubject([]);
 currentMessage = this.messageSource.asObservable();

 constructor() { }

 changeMessage(message: any) {
   this.messageSource.next(message)
 }

}
