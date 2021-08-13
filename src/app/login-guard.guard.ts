import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  sessionData:any;
  constructor(private rout:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // console.log(sessionStorage);
      // console.log(sessionStorage.keyStore);
      this.sessionData = JSON.parse(sessionStorage.getItem('keyStore')!);
      let newKey = this.sessionData ? this.sessionData[0].name : null;

      if(!newKey){
        // window.location.reload();
        return true;
      }
      else{
        this.rout.navigate(['mainmodule/contact']);
        return false;
      }
  } 
}