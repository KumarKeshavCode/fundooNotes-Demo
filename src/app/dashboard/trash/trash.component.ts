import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service'; 

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent {

  notesList!:any[];
  constructor(private httpClient:HttpService){}

  ngOnInit(): void {
    this.httpClient.getAllNotes().subscribe({
      next:(res:any)=>{
        console.log("res",res.data.data);
        this.notesList = res.data.data;
        this.filterData();
      },
      error:(err)=>{
        console.log("err",err);
      }
    })
  }
  filterData(){
    this.notesList=this.notesList.filter((item)=>{
       if(item.isDeleted==true)
      {
        return item;
      }
    })
  }

}
