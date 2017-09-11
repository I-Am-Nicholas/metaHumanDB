import { Component, Input } from '@angular/core';
import { MetaDetailComponent } from '../components/meta-detail.component'
import { DisableAliasBttnService } from '../disable-alias-bttn.service'
import { Meta } from "../meta";

@Component({
  selector: 'meta-rating',
  templateUrl: '../templates/meta-rating.component.html',
  styleUrls: [
    '../stylesheets/meta-rating.component.scss',
   '../stylesheets/shared/translucentBG.css',
   '../stylesheets/profile-panel.scss',
   '../stylesheets/shared/nav-bttns.css'
 ]
})

export class MetaRatingComponent {
  constructor(private messageService: DisableAliasBttnService) {}

  toggle: boolean;
  message: boolean = true;
  counter: number = 1;

  messageIn(): void {
      this.counter++;
      if (this.counter % 2 == 0) {
        this.messageService.relayMessage(true);
      }
      else {
        this.messageService.relayMessage(false);
      }
  }

  /* The @Input decorator tells Angular that the following property is public and
  available for binding to a parent component.
  Without @Input, Angular refuses to bind to the property.*/
  @Input() chosenMeta: Meta;
}
