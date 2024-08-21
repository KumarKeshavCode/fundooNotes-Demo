import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/userservice/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
 options:any=["English","Hindi"]


 constructor(private data:UserService,private router:Router){}

  firstname!:string;
  lastname!:string;
  submit(){
    this.data.getname(this.firstname,this.lastname);
    this.router.navigate(['/basicinfo'])
  }

}