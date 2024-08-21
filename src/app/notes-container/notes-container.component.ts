import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { DataService } from '../services/data/data.service';


@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
})
export class NotesContainerComponent implements OnInit {
  notesList: any = [];
  @Input() searchInput: string = '';

  constructor(private httpService: HttpService, private dataService:DataService) {}

  ngOnInit(): void {
    this.httpService.getAllNotes().subscribe({
      next: (r: any) => {
        this.notesList = r.data.data;
        console.log('result is: ', this.notesList);
      },
      error: (e) => {},
    });
    this.dataService.currentData.subscribe((data : any) => {
      this.searchInput = data;
    });
  }

}