import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TwitterUser } from '../../../models/twiiterResponce.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userUri: string =
    'http://localhost:3010/api/user/';
  private user: Observable<firebase.User>;
  private readonly _twitterUser = new BehaviorSubject<TwitterUser>(new TwitterUser());
  readonly twitterUser$ = this._twitterUser.asObservable();

  get twitterResponce(): TwitterUser {
    return this._twitterUser.getValue();
  }

  set twitterResponce(val: TwitterUser) {
    this._twitterUser.next(val);
  }

  constructor(private firebaseAuth: AngularFireAuth, private http: HttpClient) {
    this.user = firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.twitterResponce = user.providerData[0];
        }
      }
    );
  }

  isLoggedIn() {
    if (this._twitterUser == null) {
      return false;
    } else {
      return true;
    }
  }

  signInWithTwitter() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    );
  }

  authorizationToServer(user: TwitterUser): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('content-type', 'application/json');
    return this.http.post<string>(`${this.userUri}AuthorizationUserFromTwitter`, user, httpOptions);
  }

  getToken(): string {
    let result = localStorage.getItem('token');
debugger;
    return result;
  }
}
