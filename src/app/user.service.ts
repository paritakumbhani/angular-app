import { Injectable } from '@angular/core';


import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/compat/auth'
​
import {Observable} from 'rxjs';
import {User} from '@firebase/auth-types';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: Observable<User | any>;
  ​
    constructor(private firebaseAuth: AngularFireAuth) {
      this.user = firebaseAuth.authState;
    }
  ​
    signup(email: string, password: string) {
      this.firebaseAuth
        .createUserWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Success!', value);
        })
        .catch(err => {
          console.log('Something went wrong:',err.message);
        });    
    }
  ​
    login(email: string, password: string) {
      this.firebaseAuth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Nice, it worked!');
        })
        .catch(err => {
          console.log('Something went wrong:',err.message);
        });
    }
  ​
    logout() {
      this.firebaseAuth
        .signOut();
    }

}
