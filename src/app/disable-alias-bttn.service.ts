import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


const state = {
  isActive: false,
};

@Injectable()
export class DisableAliasBttnService {

  private subject = new BehaviorSubject<any>(state);

  message: boolean;

  relayMessage(message: boolean) {
    state.isActive = message;
    this.subject.next({ text: message });
  }

}
