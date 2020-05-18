import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoClimaComponent } from './info-clima/info-clima.component';
import {HttpClientModule} from '@angular/common/http';
import { InfoIpComponent } from './info-ip/info-ip.component'

@NgModule({
  declarations: [
    AppComponent,
    InfoClimaComponent,
    InfoIpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
