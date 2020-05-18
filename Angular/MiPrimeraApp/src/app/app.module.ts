import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap'
import {NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap'


import { NavbarComponent } from './navbar/navbar.component';
import { TableRandomComponent } from './table-random/table-random.component';
import { GatosComponent } from './gatos/gatos.component';
import {RoutesModule} from './routes/routes.module';
import { RickandmortyComponent } from './rickandmorty/rickandmorty.component';
import { InfoLocationComponent } from './info-location/info-location.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableRandomComponent,
    GatosComponent,
    RickandmortyComponent,
    InfoLocationComponent
  ],
  entryComponents: [
    InfoLocationComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RoutesModule,
    NgbModalModule,
    NgbPopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
