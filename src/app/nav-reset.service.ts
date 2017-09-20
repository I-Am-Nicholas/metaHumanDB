import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const state = {
  isActive: false,
};

@Injectable()
export class NavResetService {

   navMessage: boolean;

   subject = new BehaviorSubject<any>(this.navMessage);

  relayNavMessage(navMessage: boolean) {
    state.isActive = navMessage;
    this.subject.next({ text: navMessage });
  }

  navMessageOut(): Observable<any> {
    return this.subject.asObservable();
  }

  getState() {
    return state.isActive;
  }

}
