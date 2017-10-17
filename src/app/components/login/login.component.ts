import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  triggerLoading = false;
  email;
  constructor(private loginService: LoginService, private router: Router, private userService: UserService){
    this.email = loginService.account.email;
    loginService.user$.subscribe(user => {
        if(user) {
          this.triggerLoading = false;
          this.userService.save(user);
          let returnUrl = localStorage.getItem('returnUrl') || '/home';
          this.router.navigateByUrl(returnUrl);
        }
      }
    );
  }

  loginGoogle(): void {
    this.triggerLoading = true;
    this.loginService.loginGoogle();
  }

  loginFb(): void {
    this.triggerLoading = true;
    this.loginService.loginFb();
  }

  ngOnInit(){}

}
