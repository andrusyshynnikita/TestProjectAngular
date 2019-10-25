import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseHttpService } from '../../baseHttp-service/baseHttp.service';

import { TwitterUser } from '../../../models/twiiterResponce.model';
import { User } from '../../../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService extends BaseHttpService {
  private firebaseUser: Observable<firebase.User>;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser$: Observable<User>;

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  constructor(private firebaseAuth: AngularFireAuth, http: HttpClient) {
    super(http, 'user/');
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.firebaseUser = firebaseAuth.authState;

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  signInWithTwitter() {
    this.firebaseUser.subscribe(
      (twitterUser) => {
        if (twitterUser) {
          if (twitterUser.uid) {
            this.authorizationToServer(twitterUser.providerData[0]).subscribe(user => {
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
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
    return this.post<User>('AuthorizationUserFromTwitter', user);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
