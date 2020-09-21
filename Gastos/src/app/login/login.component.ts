import { Component, OnInit } from "@angular/core";
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
  loginForm;
  errMsg;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) 
  {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() {}

  onSubmit(loginData) {
    this.errMsg = undefined;
  
    //this.loginForm.reset();

    console.warn("Login information", loginData);

    const { email, password } = loginData;

    if (email == "" || password == "") {
      this.errMsg = "Por favor valide los datos ingresados"
    }
  }

  onRegister() {
    this.router.navigate(['/register']);
  }
}
