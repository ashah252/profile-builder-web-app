import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public invalidRegister: boolean;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.invalidRegister = false;
  }

  checkConfirm(left: string, right: string): boolean {
    return false;
  }

  onRegisterSubmit(registerForm: NgForm): void {
    if(registerForm.invalid) {
      this.invalidRegister = true;
    }

    this.authService.registerLogin(registerForm.value.firstname, registerForm.value.lastname, registerForm.value.email, registerForm.value.password)
  }

  getErrorMsg(): string {
    return "One or more Enties were not entered correctly";
  }

}
