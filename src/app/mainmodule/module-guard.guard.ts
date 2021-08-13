import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ModuleGuardGuard implements CanActivate {
  sessionData:any
  constructor(private rout:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // console.log(sessionStorage);
      // console.log("session",sessionStorage.keyStore);
      // sessionStorage.getItem("keyStore")
      this.sessionData = JSON.parse(sessionStorage.getItem('keyStore')!);
      // console.log(this.sessionData[0].name)
      let newKey = this.sessionData ? this.sessionData[0].name : null;

      if(!newKey){
        this.rout.navigate(['']);
        // window.location.reload();
        return false;
      }
      else{
        return true;
      }
  }
  
}
