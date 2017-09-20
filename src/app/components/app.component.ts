import { Component } from '@angular/core';
import { MetaService } from '../meta-service';
import { NavResetService } from '../nav-reset.service';

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../stylesheets/app.component.css',
   '../stylesheets/shared/translucentBG.css'],
  providers: [ MetaService ]
})

export class AppComponent {

  constructor(private service: NavResetService) {}

  messageIn(): void {
    return this.service.relayNavMessage("reset");
  }

}
