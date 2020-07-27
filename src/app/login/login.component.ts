import { Component, OnInit } from '@angular/core';
import { LoginService } from '@app/@shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  userId = '';
  password = '';
  message = '';

  login() {
    console.log('Logigin in');
    this.loginService.validateUser({ userId: this.userId, password: this.password }).subscribe(
      (data) => {
        console.log(data);
        if (data['authenticate'].success) {
          this.loginService.setLoggedIn(true);
          this.loginService.userId = this.userId;
          localStorage.setItem('userId', this.userId);
          localStorage.setItem('token', data['token']);
          this.router.navigate(['home']);
        }
      },
      (error) => {
        console.log('Err: ' + error);
        if (error.error.authenticate) this.message = error.error.authenticate.message.toUpperCase();
        else this.message = 'Error Connecting Database.... Try Again Later';
      }
    );
  }

  ngOnInit(): void {}
}
