import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
})
export class NotesContainerComponent implements OnInit {
  notesList: any = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getAllNotes().subscribe({
      next: (r: any) => {
        this.notesList = r.data.data;
        console.log('result is: ', this.notesList);
      },
      error: (e) => {},
    });
  }
}