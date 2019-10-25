import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TwitterUser } from '../../../models/twiiterResponce.model';
import { User } from '../../../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userUri: string = 'http://localhost:3010/api/user/';
  private firebaseUser: Observable<firebase.User>;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  constructor(private firebaseAuth: AngularFireAuth, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.firebaseUser = firebaseAuth.authState;

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  signInWithTwitter() {

    this.firebaseUser.subscribe(
      (twitterUser) => {
        if (twitterUser) {
          if (twitterUser.uid) {
            this.authorizationToServer(twitterUser.providerData[0]).subscribe(user => {
              debugger;
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
              debugger;
            });
          }
        }
      }
    );
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    );
  }

  authorizationToServer(user: TwitterUser): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('content-type', 'application/json');
    debugger;
    return this.http.post<string>(`${this.userUri}AuthorizationUserFromTwitter`, user, httpOptions);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
