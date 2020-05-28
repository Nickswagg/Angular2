import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularLabComponent } from './angular-lab/angular-lab.component';
import { AngularLab2Component } from './angular-lab2/angular-lab2.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularLabComponent,
    AngularLab2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
