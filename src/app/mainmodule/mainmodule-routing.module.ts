import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ModuleGuardGuard } from './module-guard.guard';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'navbar', component:NavbarComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'addtocart', component:AddtocartComponent},
  {path:'contact', component:ContactComponent, canActivate:[ModuleGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainmoduleRoutingModule { }
