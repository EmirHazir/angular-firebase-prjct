import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from "@angular/forms";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import { AngularFireAuth } from "angularfire2/auth";
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { EmployeeService } from './services/employee.service';
import { EmployeesComponent } from './components/employees/employees.component';

export const firebaseConfig={
    apiKey: "AIzaSyBeEYxQyI2RaE5BkaQiwarVSGnULktlTY4",
    authDomain: "employeemanagement-e13f5.firebaseapp.com",
    databaseURL: "https://employeemanagement-e13f5.firebaseio.com",
    projectId: "employeemanagement-e13f5",
    storageBucket: "employeemanagement-e13f5.appspot.com",
    messagingSenderId: "309792062593"
}


const appRoutes:Routes=[
  {path:'', component:DashboardComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'add-employee', component:AddEmployeeComponent},
  {path:'employee-info/:id', component:EmployeeInfoComponent},
  {path:'employee-edit/:id', component:EditEmployeeComponent},
  {path:'employee-info', component:EmployeeInfoComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeInfoComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    FlashMessagesModule
  ],
  providers: [
    EmployeeService,
    AngularFireAuth,
    AngularFireDatabase
        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
