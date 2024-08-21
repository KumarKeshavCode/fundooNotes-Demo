import { Component } from '@angular/core';
import { UserService } from '../services/userservice/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.scss']
})
export class BasicinfoComponent {
  selectedMonth!: string;
  selectedGender!:string;
  months:string[]=[
    'January','Febuary','March','April','May','June','July',
    'August','September','October','November','December'
  ];
  genders:string[]=[
    'Male','Female','Rather not say','Custom'
  ]

  username!:string;
  password!:string;
  classValue='basicinfo';
  constructor(private data:UserService,private router:Router){}


  //classValue='basicinfo';

  changePage(e:Event){
    console.log(this.classValue);
    e.preventDefault();
    if(this.classValue=='basicinfo')
    {
      this.classValue='username';
    }
    else
    if(this.classValue=='username')
    {
      this.data.getusername(this.username);
      this.classValue='password';
    }
    else{
      console.log(this.password)
      this.data.getpassword(this.password)
      this.router.navigate(['/login']);
    }
  }
}