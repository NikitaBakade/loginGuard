import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from './login-guard.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:LoginComponent, canActivate:[LoginGuardGuard]},
  {path:'mainmodule', loadChildren:()=>import('./mainmodule/mainmodule.module').then(mod=>mod.MainmoduleModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
