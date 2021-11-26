import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Action } from '../action/action';

@Injectable({
  providedIn: 'root'
})
export class MessageBusService {
  private bus = new Subject<Action>();
  bus$ = this.bus.asObservable()

  constructor() { }

  dispatch(message:Action){
    console.log(message)
    this.bus.next(message)

  }
}
