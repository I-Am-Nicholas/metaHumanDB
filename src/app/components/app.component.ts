import { Component } from "@angular/core";
import { NavResetService } from "../nav-reset.service";

@Component({
  selector: "app-root",
  templateUrl: "../templates/app.component.html",
  styleUrls: ["../stylesheets/app.component.css",
   "../stylesheets/shared/translucentBG.css"]
})

export class AppComponent {

  constructor(private service: NavResetService) {}

  messageToService(): void {
    this.service.relayNavMessage("reset");
  }

}
