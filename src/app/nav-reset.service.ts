import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const state = {
  isActive: null,
};


@Injectable()
export class NavResetService {

  private reset: string;
  subject = new BehaviorSubject<any>(this.reset);

  relayNavMessage(reset) {
    state.isActive = reset;
    this.subject.next({ text: reset });
  }

  navMessageOut(): Observable<any> {
    return this.subject.asObservable();
  }

  getState() {
    return state.isActive;
  }

}
