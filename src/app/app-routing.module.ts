import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./components/app.component";
import { MetaDetailComponent } from "./components/meta-detail.component";
import { WelcomeMessageComponent } from "./components/welcome-message.component";
 
export const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "detail/:id",  component: MetaDetailComponent },
  { path: "welcome", component: WelcomeMessageComponent },
  { path: "**", redirectTo: "welcome", pathMatch: "full" }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
