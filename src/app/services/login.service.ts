import { Injectable } from '@angular/core';
import { AppUser } from './../models/app-user';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of'; 
import * as firebase from 'firebase'; 

@Injectable()
export class LoginService {
  account = {
    email: null
  };
  user$: Observable<firebase.User>;

  constructor(
    private userService: UserService, private afAuth: AngularFireAuth, private route: ActivatedRoute) {
      this.user$ = afAuth.authState;
    }

  loginGoogle() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/home';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginFb() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/home';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logInWithCustomAccount(credential) {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/home';
    localStorage.setItem('returnUrl', returnUrl);

    return this.afAuth.auth.signInWithEmailAndPassword(credential.email, credential.password);  
  }

  logout() { 
    localStorage.removeItem('returnUrl');
    this.afAuth.auth.signOut();
  }

  signUp(account) {
    this.account = account;
    return this.afAuth.auth.createUserWithEmailAndPassword(account.email, account.password);
  }

  get appUser$() : Observable<AppUser> {
    return this.user$.switchMap(user => {
        if (user) return this.userService.get(user.uid);

        return Observable.of(null);
      });    
  }

  get credential() {
    return this.credential;
  }
}

