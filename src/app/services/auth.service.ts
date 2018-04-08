import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(public firbaseAuth: AngularFireAuth) { }

  getAuth() {
    return this.firbaseAuth.authState.map(auth => auth);
  }

  createUser(email: string, password: string) {
    return this.firbaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  validateUser(email: string, password: string) {
    return this.firbaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logOut() {
    return this.firbaseAuth.auth.signOut();
  }
}
