import { Component } from '@angular/core';
import { MetaService } from '../meta-service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../stylesheets/app.component.css', '../sharedBG.css'],
  providers: [ MetaService ]
})

export class AppComponent {

  constructor(
    private metaService: MetaService,
    private location: Location
  ) {}

  title = '-HUMAN DATABASE';

  goBack(): void {
    this.location.back();
  }

}
