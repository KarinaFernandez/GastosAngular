import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;
  errMsg;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) 
  {
    this.registerForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() {}

  onSubmit(registerData) {
    this.errMsg = undefined;
  
    this.registerForm.reset();

    console.warn("Register information", registerData);

    const { email, password } = registerData;

    if (email == "" || password == "") {
      this.errMsg = "Por favor valide los datos ingresados"
    } else {
      // Call to service and if is okey redirect
      this.userService.login(email, password).subscribe(user => {
        this.userService.setUser(user);
        console.log(user);
        this.router.navigate(['/expenses']);
      },
        err => {
          if (err.status === 409) {
            this.errMsg = 'No existe usuario con las credenciales ingresadas';
          }
        });
    }
  }

}