import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm;
  errMsg;

  constructor() {}

  ngOnInit() {}

  onSubmit(loginData) {
    this.errMsg = undefined;
  
    this.loginForm.reset();

    console.warn("Login information", loginData);

    const { usuario, password } = loginData;

    
  }
}
