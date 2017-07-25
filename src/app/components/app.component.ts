import { Component } from '@angular/core';
import { MetaService } from '../meta-service';

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../stylesheets/app.component.css', "../sharedBG.css"],
  providers: [MetaService]
})

export class AppComponent {

  constructor(private metaService: MetaService) { }
  title = '-HUMAN DATABASE';
}
