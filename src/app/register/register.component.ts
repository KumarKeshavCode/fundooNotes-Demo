import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
 options:any=["English","Hindi"]

   signupForm : FormGroup;
 firstNmae : string='';
 lastName :string ='';
 service : string ='';
 email : string ='';
 password : string ='';


 constructor(private location: Location, private formbuilder: FormBuilder, private http: HttpService) {
  this.signupForm = formbuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    service: ['', Validators.required],
  })
}
 
submitForm() {
  if (this.signupForm.valid) {
    let signupdata = this.signupForm.value

    // Calling SignUp() from services with required headers
    this.http.SignUp(signupdata).subscribe(response => {
      console.log("Success");
      console.log(response);
    })
  }
  else {
    console.log("signupForm is not valid")
  }
}

 

}