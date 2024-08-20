import { Component } from '@angular/core';

import {  OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  
  states: string[] = [

    
'Afrikaans',
'azərbaycan',
'bosanski',
'català',
   ' Čeština',
'Cymraeg',
'Dansk',
'Dutch',
'Eesti',
'English (United Kingdom)',
'English (United States)',
'Español (España)',
  ];


  loginForm: FormGroup;
  email: string = '';
  password: string = '';

  constructor(private formbuilder: FormBuilder, private http: HttpService, private router: Router) {
    this.loginForm = formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  };

  submitForm() {
      console.log(this.email);
      console.log(this.password);
      // Calling LoginAccess() with email and password
      this.http.LoginAccess(this.email, this.password).subscribe({
        next: (res: any) => {
          //Set Id on LocalStorage so that we can use it again for fetching the corresponding user Notes
          const id = res.id;
          localStorage.setItem('id', id);

          // Navigating to the dashboard on successful login
          this.router.navigate(['/dashboard'])
        },
        error: (err: string) => {
          console.log("Failed");
          console.log(err);
        }
      })
  }



}
