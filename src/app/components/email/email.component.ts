import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  triggerLoading = false;
  errMessage: String;
  constructor(private loginService: LoginService, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.triggerLoading = true;
    if(form.valid) {
      let credential = {
        email: form.value.email,
        password: form.value.password
      }
      this.loginService.logInWithCustomAccount(credential).then(
        (success) => {
          this.triggerLoading = false;
          let returnUrl = localStorage.getItem('returnUrl') || '/home';
          this.router.navigateByUrl(returnUrl);
        }, 
        (error) => {
          this.triggerLoading = false;
          this.errMessage = error.message;
        });
    }
  }

}
