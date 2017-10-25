import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from "angular2-flash-messages";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { EmployeeService } from '../../services/employee.service';
import { Employee } from "../../models/employee";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

id:string;
employee: Employee={
  firstName:'',
  lastName:'',
  country:'',
  city:'',
  email:'',
  phone:0,
  salary:0
}
disabledSalaryEdit:boolean=true;

  constructor(private employeeService: EmployeeService,
    private flasMessageService: FlashMessagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(employee=>{
      this.employee = employee
    })
  }

  submitForm({value, valid}:{value:Employee, valid:boolean}){
    
    if (!valid) {
      this.flasMessageService.show('OOPS! Please check your info.',{cssClass:'alert alert-danger', timeout:5000});
      this.router.navigate(['edit-employee/'+this.id])
      console.log("not correct data")
    }else{
      this.employeeService.updateEmployee(this.id,value);
      this.flasMessageService.show('Success!.Your info is updated',{cssClass:'alert alert-success', timeout:5000});
      this.router.navigate(['/employee-info/'+this.id])
      console.log(this.employee)
    }
  }

}
