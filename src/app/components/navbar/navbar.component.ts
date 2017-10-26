import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

import 'rxjs/add/operator/map'

import { AuthService } from "../../services/auth.service"
import { SettingsService } from "../../services/settings.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isLogIn:boolean
  isUserLogIn:string
  enableRegister:boolean

  constructor(private authService:AuthService,
    private flasMessageService: FlashMessagesService,
    private router: Router,
    private settingsService: SettingsService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.isLogIn= true
        this.isUserLogIn= auth.email;  
      }else{
        this.isLogIn= false;
      }
    });
    this.enableRegister = this.settingsService.getSettings().isRegisterOpen
  }

  logOut(){
    this.authService.logout();
    this.flasMessageService.show('You are Logged Out',{cssClass:'alert alert-success', timeout:5000});
    this.router.navigate(['/login'])
  }

}
