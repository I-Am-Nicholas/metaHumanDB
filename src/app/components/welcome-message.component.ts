import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'welcome-message',
  templateUrl: '../templates/welcome-message.component.html',
  styleUrls: ['../stylesheets/welcome-message.component.css']
})

export class WelcomeMessageComponent {

  @Input() showAnimation: Boolean;

}
