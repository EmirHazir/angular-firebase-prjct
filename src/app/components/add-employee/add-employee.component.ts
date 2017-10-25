import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router';

import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee={
    firstName: '',
    lastName: '',
    city: '',
    country: '',
    email: '',
    phone: 0,
    salary: 0
  }
  disabledSalary:boolean= true
  constructor(public flashMessagesService : FlashMessagesService,
              public router: Router,
              public employeeService: EmployeeService) { }

  ngOnInit() {
  }

  submitForm({value, valid}:{value:Employee, valid:boolean}){
    if(this.disabledSalary)
      this.employee.salary=0;
    if (!valid) {
      this.flashMessagesService.show('OOPS! Please check your info.',{cssClass:'alert alert-danger', timeout:5000});
      this.router.navigate(['/add-employee'])
      console.log("not correct data")
    }else{
      this.employeeService.addEmployees(value);
      this.flashMessagesService.show('Success!.Your info is added',{cssClass:'alert alert-success', timeout:5000});
      this.router.navigate(['/'])
      console.log(this.employee)
    }
  }

}
