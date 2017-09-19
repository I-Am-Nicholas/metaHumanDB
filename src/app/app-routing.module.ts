import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./components/app.component";
import { MetasComponent } from "./components/metas.component";
import { MetaDetailComponent } from "./components/meta-detail.component";
import { MetaRatingComponent } from "./components/meta-rating.component";
import { WelcomeMessageComponent } from "./components/welcome-message.component";
 
const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "detail/:id",  component: MetaDetailComponent },
  { path: "**", redirectTo: "metas", pathMatch: "full" }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
