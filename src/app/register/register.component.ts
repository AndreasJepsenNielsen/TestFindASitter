//import { BsDatepickerConfig } from 'ngx-bootstrap';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  this.bsConfig = {
    containerClass: 'theme-red'
  },
    this.createRegisterForm();
  }

  //reactive form
  createRegisterForm() {
    this.registerForm = this.fb.group({
      gender: ['male'],
      username: ['', Validators.required, Validators.maxLength(30), Validators.minLength(3)],
      firstName: ['', Validators.required, Validators.maxLength(50), Validators.minLength(3)],
      lastName: ['', Validators.required, Validators.maxLength(60), Validators.minLength(3)],
      dateOfBirth: [null, Validators.required],
      city: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: FormGroup) {
    //Checks if the two passwords match
    return g.get('password').value === g.get('confirmPassword').value ? null : { 'mismatch': true };
  }


}
