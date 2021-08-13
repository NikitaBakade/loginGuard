import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainmoduleRoutingModule } from './mainmodule-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http'
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    AddtocartComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MainmoduleRoutingModule,
    HttpClientModule
  ]
})
export class MainmoduleModule { }
