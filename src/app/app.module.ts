import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';

@NgModule({
   declarations: [
      AppComponent,
      LocationComponent,
      NavComponent,
      AboutComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
