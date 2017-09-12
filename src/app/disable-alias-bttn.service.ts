import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const state = {
  isActive: false,
};

@Injectable()
export class DisableAliasBttnService {

  message: boolean;

  subject = new BehaviorSubject<any>(this.message); //Private?

  relayMessage(message: boolean) {
    state.isActive = message;
    this.subject.next({ text: message });
  }

  messageOut(): Observable<any> {
    return this.subject.asObservable();
  }

  getState() {
    return state.isActive;
  }

}
