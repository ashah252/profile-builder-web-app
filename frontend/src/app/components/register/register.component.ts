import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public invalidRegister: boolean;

  constructor() { }

  ngOnInit(): void {
    this.invalidRegister = false;
  }

  onRegisterSubmit(registerForm: NgForm): void {
    this.invalidRegister = true;
  }

  getErrorMsg(): string {
    return "One or more Enties were not entered correctly";
  }

}
