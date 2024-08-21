import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  id=localStorage.getItem("id")

  constructor(private http:HttpClient) { }
  getAllNotes(){
    console.log("working")
    return this.http.get("https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?access_token="+`${this.id}`) 
  }


  addnewnote(title:any ,description:any){
    return this.http.post("https://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes?access_token="+`${this.id}`,{"title":title,"description":description})
  }



  
  LoginAccess(email:string,password:string){
    console.log("API for login is working");
    console.log("email : ",email);
    console.log("password : ",password);
    return  this.http.post('https://fundoonotes.incubation.bridgelabz.com/api/user/login', {"email": email, "password":password });
  }



   newuser(data:any){
    console.log("working")
    console.log(data)
    return this.http.post("https://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",data)
  
  }

  
  // SignUp(signupData: any) : Observable<any>{
  //   console.log("API for Signup is working");
  //   return this.http.post('https://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', signupData);
  // }
  
}
