import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {



  constructor(private http:HttpClient) { }
  getAllNotes(p0: string){
    console.log("working")
    return this.http.get("https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?access_token=O2NvDmj9sZex9qWcRBWudsdHx5VmvvrWw5Yno4GQ5CTQEbNAixja8FBhaMWj4i7W") 
  }

  
}
