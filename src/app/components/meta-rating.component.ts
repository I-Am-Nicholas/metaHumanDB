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

  public hide: boolean = false;
  public toggle: boolean;
  public message: boolean = true;
  public toggler: number = 1;
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
    this.toggler++;
    if (this.toggler % 2 == 0) {
      this.messageService.relayMessage(true);
    }
    else {
      this.resetAliasBtn();
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
