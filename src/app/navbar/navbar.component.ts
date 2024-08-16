import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchInput!: string;

  searchInputchange(event : any) : void{
    this.searchInput=event.target.value;
  }

  clearInput() : void{
    this.searchInput='';
  }

}
