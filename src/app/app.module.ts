import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ExpensivesModule } from './expensives/expensives.module';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import {DashboardModule} from "./dashboard/dashboard.module";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ExpensivesModule,
    CoreModule,
    DashboardModule,
  ],
  providers: [],
  exports: [
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
