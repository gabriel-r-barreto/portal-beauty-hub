import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(private http: HttpClient) { }

  login(email: string, passwrd: string) {

    let obj = {
      "email": email,
      "pass" : passwrd
    }


   return this.http.post("https://api-beauty-hub.vercel.app/users/login", obj)
    
  }


}
