import { Component } from '@angular/core';
import { OpensidenvService } from 'src/app/services/opensidenav/opensidenv.service';
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


  constructor(private  os :OpensidenvService){}
  flag ='false';

  opensidenav(){
    this.os.updateFlag(this.flag);

    if(this.flag=='true')
    {
      this.flag='false';
    }
    else{
      this.flag='true';
    }
  }



}
