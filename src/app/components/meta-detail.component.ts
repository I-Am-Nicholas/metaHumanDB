import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DisableAliasBttnService } from '../disable-alias-bttn.service'

import { MetaService } from '../meta-service';
import { Meta } from '../meta'


@Component({
  selector: 'meta-detail',
  styleUrls: ['../stylesheets/meta-detail.component.css',
   '../stylesheets/shared/translucentBG.css',
   '../stylesheets/flipper.css',
   '../stylesheets/shared/nav-bttns.css'
 ],
  templateUrl: '../templates/meta-detail.component.html'
})

export class MetaDetailComponent {

  @Input() clickedMeta: Meta;
  message: Boolean;
  subscription: Subscription;

  constructor(private messageService: DisableAliasBttnService) {
    this.subscription = this.messageService.messageOut().subscribe(message => {
      if (messageService.getState() == true){
        this.message = message;
      }
      else {
        this.message = null;
      }
    });
  }

}
