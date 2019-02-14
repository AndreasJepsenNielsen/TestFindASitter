import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required,Validators.minLength(8), Validators.maxLength(20)]],
      password: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(20)]]
    });
  }

  onSubmit(){ 
    console.log("Username: " + this.loginForm.get("username").value + "\n Password: " + this.loginForm.get("password").value)

  }

}
