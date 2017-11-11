
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import { NavbarComponent } from './navbar/navbar.component';
import { CoreComponent } from './core.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

  ],
  declarations: [
    CoreComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  exports: [
    CoreComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
