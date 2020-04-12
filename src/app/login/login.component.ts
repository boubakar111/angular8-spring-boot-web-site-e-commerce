import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';
import { CaddyService } from '../services/caddy.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public authService: AuthentificationService,
    public router: Router,
    public  caddyService: CaddyService) { }

  ngOnInit(): void {
  }

  onLogin(user) {
    this.authService.login(user.username, user.password);
    if (this.authService.isAuthenticated()) {
      this.caddyService.loadCaddyFromLocalStorage();
      this.router.navigateByUrl('');
    }
  }

}
