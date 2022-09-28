import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  email!: string;
  password!: string;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initFormGroup();
  }


  initFormGroup(): void {
    this.formLogin = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: null,
    });
  }

  onLogin(): void {
    this.email = this.formLogin.value.email;
    alert('Email => ' + this.email);
  }

}
