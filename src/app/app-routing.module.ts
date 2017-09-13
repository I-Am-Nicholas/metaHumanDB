import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./components/app.component";
import { MetasComponent } from "./components/metas.component";
import { MetaDetailComponent } from "./components/meta-detail.component";
import { MetaRatingComponent } from "./components/meta-rating.component";
 
const routes: Routes = [
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
  { path: "welcome",  component: MetasComponent },
  { path: "detail",  component: MetaDetailComponent },
  { path: "rating",  component: MetaRatingComponent },
  { path: "**", redirectTo: "/welcome", pathMatch: "full" }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
