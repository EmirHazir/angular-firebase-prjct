import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string
  password: string
  constructor(private authService:AuthService,
    private flasMessageService: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  registerSubmit(email:string, password:string){
    this.authService.register(this.email, this.password).then(
      (res)=>{
        this.flasMessageService.show('you are registered successfuly!.',{cssClass:'alert alert-success', timeout:5000});
        this.router.navigate(['/'])
      }).catch((err)=>{
      this.flasMessageService.show('OOPS! Check you info and try again!',{cssClass:'alert alert-danger', timeout:5000});
      this.router.navigate(['/register'])
    });
  }

}
