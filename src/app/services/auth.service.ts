import { Injectable } from '@angular/core';

import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";


@Injectable()
export class AuthService {

    constructor(private afAuth:AngularFireAuth) { }

    //Email ve Password ile giriş metodu service base
    login(email:string, password:string){
        return new Promise((resolve, reject)=>{
            this.afAuth.auth.signInWithEmailAndPassword(email,password)
            .then(userData=>resolve(userData), err=>reject(err));
        });
    }

    logout(){
        this.afAuth.auth.signOut();
    }

    register(email:string, password:string){
        return new Promise((resolve, reject)=>{
            this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(userData=>resolve(userData), err=>reject(err));
        });
    }

    getAuth(){
        return this.afAuth.authState.map(auth=> auth);
    }

}