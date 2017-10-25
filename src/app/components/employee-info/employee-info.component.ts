import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from "angular2-flash-messages";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { EmployeeService } from '../../services/employee.service';
import { Employee } from "../../models/employee";

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  id: string;
  employee: Employee;
  hasSalary: boolean= false;
  updateSalary: boolean= false;
  showSalaryUpdate:boolean= false;

  constructor(private employeService: EmployeeService,
              private flasMessageService: FlashMessagesService,
              private router: Router,
              private activatedRoute: ActivatedRoute
              ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeService.getEmployeeById(this.id).subscribe(employee =>{
      if (employee.salary > 0) {
        this.hasSalary = true;
      }
      this.employee = employee;
      console.log(employee)
    })
  }

  updateSalaryEmployee(id: string){
    this.employeService.updateEmployee(this.id, this.employee)
    this.flasMessageService.show("salary updated", {cssClass:'alert alert-success', timeout:6000})
    this.router.navigate(['/employee/'+this.id])
  }

  removeEmployee(){
    if(confirm("Are you sure delete")){
      this.employeService.deleteEmployee(this.id)
      this.flasMessageService.show("employe deleted", {cssClass:'alert alert-success', timeout:6000})
      this.router.navigate(['/'])
    }
  }

}
