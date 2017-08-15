import { Component } from '@angular/core';
import { MetaService } from '../meta-service';

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../stylesheets/app.component.css',
   '../stylesheets/shared/translucentBG.css'],
  providers: [ MetaService ]
})

export class AppComponent {

  constructor(
  ) {}

  title = '-HUMAN DATABASE';

}
