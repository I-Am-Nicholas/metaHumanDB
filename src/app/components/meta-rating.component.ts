import { Component, Input } from "@angular/core";
import { Meta } from "../meta";

import { Subscription } from "rxjs/Subscription";

//SERVICES
import { DisableAliasBttnService } from "../disable-alias-bttn.service"
import { NavResetService } from "../nav-reset.service";


@Component({
  selector: "meta-rating",
  templateUrl: "../templates/meta-rating.component.html",
  styleUrls: [
    "../stylesheets/meta-rating.component.scss",
   "../stylesheets/shared/translucentBG.css",
   "../stylesheets/profile-panel.scss",
   "../stylesheets/shared/nav-bttns.css"
 ],
 providers: [ NavResetService ]
})


export class MetaRatingComponent {

  public hide: boolean;
  public toggle: boolean;
  private subscription: Subscription;

  constructor(
    private messageService: DisableAliasBttnService,
    private navService: NavResetService
  ){
    this.subscription = this.navService.navMessageOut().subscribe(fromService => {
      if (navService.getState()){
       this.resetAliasBtn();
      }
    });
  }

  messageIn(): void {
    if (this.toggle == true) {
      this.messageService.relayMessage(true);
    }
    else {
      this.resetAliasBtn();
    }
  }

  hidePanel(): void {
    if (this.toggle == true) {
      this.hide = true
    }
    else {
      setTimeout(() => {
        this.hide = false
      }, 500);
    }
  }

  resetAliasBtn(): void {
    this.messageService.relayMessage(false);
  };

  /* The @Input decorator tells Angular that the following property is public and
  available for binding to a parent component.
  Without @Input, Angular refuses to bind to the property.*/
  @Input() chosenMeta: Meta;
}
