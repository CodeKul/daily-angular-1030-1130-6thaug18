import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCreds } from './user';    

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  weatherByCity(city: string): Observable<Object> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7406c21bb1cb9f59d936a59c4e890279`)
  }

  login(creds: UserCreds) {
    return this.http.post(
      `http://localhost:3000/login`,
      creds,
      {
        headers : {
          'Accept' :'application/json',
          'Content-Type' :'application/json'
        }
      }
    )
  }
}
