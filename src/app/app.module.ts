import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from "@agm/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SavePlaceComponent } from './save-place/save-place.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SavePlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAD1fgW2j-RgJxW8_f6SCeKVYkEEbR6BIc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
