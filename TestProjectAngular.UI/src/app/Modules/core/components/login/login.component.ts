import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AuthService } from '../../Services/auth/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  signInWithTwitter() {
    debugger;
    this.authService.signInWithTwitter();
    this.authService.twitterUser$.subscribe((user) => {
      if (user.uid) {
        this.authService.authorizationToServer(user).subscribe(responce => {
          debugger;
          let accessToken = (<any>responce).accessToken;
          localStorage.setItem("accessToken", accessToken);
          this.router.navigate(['todoList']);
          debugger;
        });
      }
    });
  }
}
