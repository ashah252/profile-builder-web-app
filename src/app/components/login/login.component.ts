import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginInfoForm: FormGroup;
  public loginInvalid: boolean;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.loginInvalid = false
  }

  onLoginSubmit(loginForm: NgForm): void {

    if(loginForm.invalid) {
      this.loginInvalid = true;
    }

    this.authService.tryLogin(loginForm.value.email, loginForm.value.password)
  }

}
