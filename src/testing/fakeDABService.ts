import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


const fakeState = {
  isActive: false
};

@Injectable()
export class fakeDABService {

  public fakeSubject = new BehaviorSubject<any>(fakeState);

  message: boolean;

  fakeRelayMessage(fakeMessage: boolean) {
    fakeState.isActive = fakeMessage;
    this.fakeSubject.next({ text: fakeMessage });
  }

}



// @Injectable()
// export class FakeService {
//   protected value = 'real value';
//
//   getValue() { return this.value; }
//   setValue(value: string) { this.value = value; }
//
//   getAsyncValue() { return Promise.resolve('async value'); }
//
//   getObservableValue() { return Observable.of('observable value'); }
//
//   getObservableDelayValue() {
//     return Observable.of('observable delay value').delay(10);
//   }
// }
