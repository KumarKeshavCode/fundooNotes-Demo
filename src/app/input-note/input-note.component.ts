import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-input-note',
  templateUrl: './input-note.component.html',
  styleUrls: ['./input-note.component.scss']
})
export class InputNoteComponent {
  title!: string;
  description!: string;
  constructor(private httpclient: HttpService) {}
  submit(event: any){
    if(event.key === "Enter") {
      // api call to add new note
      this.httpclient.addnewnote(this.title,this.description).subscribe({
        next:(res:any)=>{
          console.log(res);
          window.location.reload();
        },error(err:any){
          console.log(err);
        }
    });
    }
  }
}
