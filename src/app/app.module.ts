import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//for route
import { Routes, RouterModule } from '@angular/router' 
//for forms
import { FormsModule } from "@angular/forms";

//firebase and flash message modules
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import { AngularFireAuth } from "angularfire2/auth";
import { FlashMessagesModule } from 'angular2-flash-messages';

//Components
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

//services
import { EmployeeService } from './services/employee.service';
import { EmployeesComponent } from './components/employees/employees.component';
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./guards/auth.guard";
import { SettingsService } from "./services/settings.service";
import { RegisterGuard } from './guards/register.guard';

export const firebaseConfig={
    apiKey: "AIzaSyBeEYxQyI2RaE5BkaQiwarVSGnULktlTY4",
    authDomain: "employeemanagement-e13f5.firebaseapp.com",
    databaseURL: "https://employeemanagement-e13f5.firebaseio.com",
    projectId: "employeemanagement-e13f5",
    storageBucket: "employeemanagement-e13f5.appspot.com",
    messagingSenderId: "309792062593"
}


const appRoutes:Routes=[
  {path:'', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'register', component:RegisterComponent, canActivate:[RegisterGuard]},
  {path:'login', component:LoginComponent},
  {path:'add-employee', component:AddEmployeeComponent, canActivate:[AuthGuard]},
  {path:'employee-info/:id', component:EmployeeInfoComponent, canActivate:[AuthGuard]},
  {path:'employee-edit/:id', component:EditEmployeeComponent, canActivate:[AuthGuard]},
  {path:'employee-info', component:EmployeeInfoComponent},
  {path:'settings', component:SettingsComponent, canActivate:[AuthGuard]},
  {path:'**', component:PageNotFoundComponent},
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
    AngularFireDatabase,
    AuthService,
    AuthGuard,
    SettingsService,
    RegisterGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
