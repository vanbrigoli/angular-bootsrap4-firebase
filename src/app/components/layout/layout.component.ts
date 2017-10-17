import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { AppUser } from './../../models/app-user'; 

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  appUser: AppUser;
  
  constructor(private loginService: LoginService, private router: Router) {
    loginService.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  ngOnInit() {
  }

}
