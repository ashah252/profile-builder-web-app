import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APISuccess } from '../models/api-success.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  auth_resource: string = "/api/auth"

  constructor(private httpClient: HttpClient) { }

  tryLogin(email: string, password: string): void {
    this.httpClient.post<APISuccess>(
      this.auth_resource + '/login', 
      {
        email: email,
        password: password
      })
    .subscribe(apisuccess => {
      if (apisuccess.ok != 0){
        console.log('Success in Logging in')
      }
      else {
        console.log('Failure in Logging in')
      }
    })
  }

  registerLogin(firstname: string, lastname: string, email: string, password: string): void {
    this.httpClient.post<APISuccess>(
      this.auth_resource + '/register', 
      {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
      })
    .subscribe(apisuccess => {
      if (apisuccess.ok != 0){
        console.log('Success in Registering Account')
      }
      else {
        console.log('Failure in Registering Account')
      }
    })
  }
}
