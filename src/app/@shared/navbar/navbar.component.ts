import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  loggedIn = false;
  ngOnInit(): void {
    this._observerLoggedIn();
  }

  private _observerLoggedIn() {
    this.loginService.loggedIn.subscribe((isLoggedIn) => {
      this.loggedIn = isLoggedIn;
    });
  }
  // HTTP header
  // 'Authorization': 'Bearer token'
}
