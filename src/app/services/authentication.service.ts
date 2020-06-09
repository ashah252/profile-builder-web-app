import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  auth_resource: string = "/api/auth"

  constructor(private httpClient: HttpClient) { }

  tryLogin(email: string, password: string) {
    this.httpClient.post(
      this.auth_resource, 
      {
        email: email,
        password: password
      })
    .subscribe(
      (val) => {
        console.log("POST call successful value returned in body", 
                    val);
    },
    response => {
        console.log("POST call in error", response);
    },
    () => {
        console.log("The POST observable is now completed.");
    })
  }
}
