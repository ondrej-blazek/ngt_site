import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { AuthService } from '@auth/services';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroup: any;
  public loginForm: FormGroup;
  public errorMessage: string;

  public matcher = new MyErrorStateMatcher();
  public emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.errorMessage = '';
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    // this.loginForm = this.fb.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
  }

  tryFacebookLogin() {
    this.authService.doFacebookLogin()
      .then(res => {
        this.router.navigate(['/user']);
      });
  }

  tryTwitterLogin() {
    this.authService.doTwitterLogin()
      .then(res => {
        this.router.navigate(['/user']);
      });
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
      .then(res => {
        this.router.navigate(['/user']);
      });
  }

  tryLogin(value) {
    this.authService.doLogin(value)
      .then(res => {
        this.router.navigate(['/user']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      });
  }
}
