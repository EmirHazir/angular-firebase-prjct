import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from "angularfire2/auth";

import 'rxjs/add/operator/map'

import { AuthService } from "../services/auth.service"
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private afAuth:AngularFireAuth,
    private router: Router) { }

  canActivate(): Observable<boolean>{
     return this.afAuth.authState.map(auth => {
          if(!auth){
              this.router.navigate(['/login']);
              return false;
          }else{
              return true;
          }
      });
  }
}
