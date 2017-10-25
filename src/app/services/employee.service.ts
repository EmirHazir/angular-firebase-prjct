import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import { FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database-deprecated";
import { Observable } from "rxjs";
import * as firebase from 'firebase/app';

import { Employee } from "../models/employee";

@Injectable()
export class EmployeeService {
  // preserveSnapshot: false
  employees: FirebaseListObservable<any[]>
  employee: FirebaseObjectObservable<any>
  constructor(public af: AngularFireDatabase) {
    this.employees = this.af.list('/employees/employees') as FirebaseListObservable<Employee[]>
  }

  getEmployees() {
    return this.employees
  }
  
  addEmployees(employee: Employee) {
    return this.employees.push(employee);
  }

  getEmployeeById(id: string){
    this.employee = this.af.object('/employees/employees/'+id) as FirebaseObjectObservable<Employee>;
    return this.employee;
  }

  updateEmployee(id:string, employee:Employee){
    return this.employees.update(id, employee);
  }

  deleteEmployee(id:string){
    return this.employees.remove(id);
  }
}
