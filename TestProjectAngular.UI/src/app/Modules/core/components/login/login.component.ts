import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AuthService } from '../../Services/auth/auth-service/auth.service';
import { runOutsideAngular } from 'angularfire2';

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
     if(this.authService.currentUserValue){
       debugger;
      this.router.navigate(['']);
     }
  }

  signInWithTwitter() {
    this.authService.signInWithFacebook()
    .then((res) => {
      if (res) {
        this.authService.authorizationToServer(res.user.providerData[0]).subscribe(user => {
          if (user) {
            this.authService.updateCurrentUserValue(user);
            this.router.navigate(['']);
          }
        });
      }

      })
    .catch((err) => console.log(err));
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
    .then((res) => {
      if (res) {
        this.authService.authorizationToServer(res.user.providerData[0]).subscribe(user => {
          if (user) {
            this.authService.updateCurrentUserValue(user);
            this.router.navigate(['']);
          }
        });
      }
      })
    .catch((err) => console.log(err));
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
    .then((res) => {
      if (res) {
        this.authService.authorizationToServer(res.user.providerData[0]).subscribe(user => {
          if (user) {
            this.authService.updateCurrentUserValue(user);
            this.router.navigate(['']);
          }
        });
      }

      })
    .catch((err) => console.log(err));
  }
}
