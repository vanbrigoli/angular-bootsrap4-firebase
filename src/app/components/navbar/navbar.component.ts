import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { AppUser } from './../../models/app-user'; 

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input('app-user') appUser;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/login');
  }

}
