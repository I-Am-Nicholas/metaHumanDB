import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DisableAliasBttnService {

  message: boolean;

  subject = new BehaviorSubject<any>(this.message); //Private?

  relayMessage(message: boolean) {
    this.subject.next({ text: message });
  }

}
