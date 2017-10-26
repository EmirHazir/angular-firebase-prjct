import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string
  password: string

  constructor( private authService:AuthService,
    private flasMessageService: FlashMessagesService,
    private router: Router) { }

  ngOnInit() {
  }

  loginSubmit(){
    this.authService.login(this.email, this.password).then(
      (res)=>{
        this.flasMessageService.show('you are logged in!.',{cssClass:'alert alert-success', timeout:5000});
        this.router.navigate(['/'])
      }).catch((err)=>{
      this.flasMessageService.show('Email or Password is not correct',{cssClass:'alert alert-danger', timeout:5000});
      this.router.navigate(['/login'])
    });
  }

}
