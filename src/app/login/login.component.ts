import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../interfaces/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: string = '';
  password: string = '';

    constructor(private http: HttpClient, private router: Router, private AuthService: AuthService) {}

  onSubmit() {
    this.http.get<User[]>('http://localhost:3000/users', { params: { username: this.user, password: this.password } })
    .subscribe(
      response => {
        const user = response.find((u: User) => u.username === this.user && u.password === this.password);
          if (user) {
            this.AuthService.login(this.user);
            this.router.navigate(['inicio']);
/* this.router.navigate(['inicio'], { state: { userName: this.user, loginTime: new Date() } });*/
          } else {
            alert('Usuario o contraseña incorrectos');
          }
        },
        error => {
          console.error('Error al iniciar sesión:', error);
          alert('Error al iniciar sesión. Por favor, intenta de nuevo más tarde.');
        }
      );
  }

  onCancel() {
    this.router.navigate(['login']);
  }
}
