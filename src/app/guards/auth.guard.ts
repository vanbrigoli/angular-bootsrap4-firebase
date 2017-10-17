import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; 

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: LoginService, private router: Router) { }

  canActivate(route,
    state: RouterStateSnapshot) {
      return this.auth.user$.map(user => {
        if (user) return true; 
  
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
      });
  }
}
