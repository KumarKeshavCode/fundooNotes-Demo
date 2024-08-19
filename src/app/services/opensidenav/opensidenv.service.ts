import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpensidenvService {
  flag = new BehaviorSubject('true');

  constructor() { }
  updateFlag(newFlag: string){
    this.flag.next(newFlag);
  }
}
