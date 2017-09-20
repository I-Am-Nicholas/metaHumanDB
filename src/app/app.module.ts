import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule }    from "@angular/http";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService }  from "./in-memory-data.service";

//Services
import { MetaService } from "./meta-service";
import { DisableAliasBttnService } from "./disable-alias-bttn.service"

import { AppComponent } from "./components/app.component";
import { MetasComponent } from "./components/metas.component";
import { MetaDetailComponent } from "./components/meta-detail.component";
import { MetaRatingComponent } from "./components/meta-rating.component";
import { WelcomeMessageComponent } from "./components/welcome-message.component";

import { findStringInNode } from "../testing/find-string-in-node";
import { click } from "../testing/clicker-left";

//ROUTER LIBRARIES
import { RouterLinkStubDirective } from "../testing/router-stubs";
import { RouterOutletStubComponent } from "../testing/router-stubs";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MetaDetailComponent,
    MetasComponent,
    MetaRatingComponent,
    WelcomeMessageComponent,
    RouterLinkStubDirective,
    RouterOutletStubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [MetaService, DisableAliasBttnService],
  bootstrap: [AppComponent]
})

export class AppModule {}
