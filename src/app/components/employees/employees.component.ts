import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import { Employee } from "../../models/employee";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees : Employee[]
  totalEmployees: number
  totalSalarySum: number
  constructor(public employeService: EmployeeService) {

   }

  ngOnInit() {
    this.employeService.getEmployees().subscribe(employees =>{
      this.employees = employees
    // this.getTotalEmployeesWithSalary()
  })
  }


  // getTotalEmployeesWithSalary(){
  //   let emplTotal = 0;
  //   let totalSalary = 0;

    // for (var index = 0; index < this.employees.length; index++) {
    // this.employees.forEach(element => {
    //   this.employees[index].salary
    //   emplTotal += 1;
    //   totalSalary = parseFloat(totalSalary.toString() + element.salary.toString())
    // });}
    // for (var index = 0; index < this.employees.length; index++) {
    //   let element = this.employees[index].salary;
    //   emplTotal += 1;
    //   totalSalary += parseFloat(element.toString())
    // }
    
  //   this.totalEmployees = emplTotal
  //   this.totalSalarySum = totalSalary
  //   console.log(this.totalEmployees)
  //   console.log(this.totalSalarySum)
  // }

}
