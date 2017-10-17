import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isMatch = true;
  triggerLoading = false;
  errMessage: String;
  email;
  constructor(private loginService: LoginService, private router: Router, private userService: UserService) {
      this.email = loginService.account.email; 
   }

  ngOnInit() {
  }

  onSubmit(form){
    if(this.validatePasswords(form) && form.valid) {
      this.triggerLoading = true;
      let newAccount = {
        email: form.value.email,
        password: form.value.password
      }
      this.loginService.signUp(newAccount).then(
        (createdAccnt) => {
          this.triggerLoading = false;
          this.userService.save(createdAccnt);
          let returnUrl = localStorage.getItem('returnUrl') || '/home';
          this.router.navigateByUrl(returnUrl);
        },
        (error) => {
          this.triggerLoading = false;
          this.errMessage = error.message;
        }); 
    }
  }

  isFormValid(form) {
    return form.valid && this.validatePasswords(form);
  }

  validatePasswords(form){
    return (form.value.password == form.value.confirmPassword);
  }
}
