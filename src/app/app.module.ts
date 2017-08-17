import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { MetasComponent } from './components/metas.component';
import { MetaDetailComponent } from './components/meta-detail.component';
import { MetaService } from './meta-service';
import { MetaRatingComponent } from './components/meta-rating.component';
import { findStringInNode } from '../testing/find-string-in-node';

@NgModule({
  declarations: [
    AppComponent,
    MetaDetailComponent,
    MetasComponent,
    MetaRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [MetaService],
  bootstrap: [AppComponent]
})

export class AppModule {}
