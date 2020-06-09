import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginInfoForm: FormGroup;
  public loginInvalid: boolean;

  constructor() { }

  ngOnInit(): void {
    this.loginInvalid = false
  }

  onLoginSubmit(loginForm: NgForm): void {

    if(loginForm.invalid) {
      this.loginInvalid = true;
    }

    var email: string = loginForm.value.email;
    var password: string = loginForm.value.email;

  }

}
