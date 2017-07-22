import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { MetasComponent } from './metas.component';
import { MetaDetailComponent } from './meta-detail.component';
import { MetaService } from './meta-service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MetaDetailComponent,
    MetasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true})
  ],
  providers: [MetaService],
  bootstrap: [AppComponent]
})

export class AppModule {}
