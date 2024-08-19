import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = "";
  password: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    this.authService.login({ email: this.email, password: this.password }).subscribe(
      response => {
        console.log('Login successful', response);
        // Stocke le token JWT (si nécessaire) et redirige vers une autre page
        this.router.navigate(['tabs']);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
