import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BaseHttpService {

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  };

  private readonly hostDomain: string = 'http://localhost:3010/api/';

  constructor(
    protected http: HttpClient,
    private controllerName: string
  ) { }

  get<T>(action: string): Observable<T> {
    return this.http.get<T>(`${this.hostDomain}${this.controllerName}${action}`);
  }

  delete(action: string) {
    return this.http.delete(`${this.hostDomain}${this.controllerName}${action}`);
  }

  post<T>(action: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.hostDomain}${this.controllerName}${action}`, body, this.httpOptions);
  }
}
