import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent {
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
