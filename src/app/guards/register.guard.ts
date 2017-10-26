import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from "angularfire2/auth";
import { SettingsService } from "../services/settings.service";

import 'rxjs/add/operator/map'

import { AuthService } from "../services/auth.service"
@Injectable()
export class RegisterGuard implements CanActivate {

  constructor(private afAuth:AngularFireAuth,
    private router: Router,
    private settingsService:SettingsService) { }

  canActivate(): boolean{
     if(this.settingsService.getSettings().isRegisterOpen){
         return true;
     }else{
         this.router.navigate(['/login']);
         return false;
     }
  }
  
}