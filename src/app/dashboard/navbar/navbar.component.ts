import { Component } from '@angular/core';
import { OpensidenvService } from 'src/app/services/opensidenav/opensidenv.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  sarchText: string = '';
  searchInput!: string;
  //router: any;
  searchInputchange(event : any) : void{
    this.searchInput=event.target.value;
  }
  clearInput() : void{
    this.searchInput='';

  }

  constructor(private  os :OpensidenvService  , private router :Router, private dataService:DataService){}
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

  logout(){
    this.router.navigate(['/login']);
    localStorage.removeItem('id');
  }

  // searchinput  :string =""; 
  onSearch(){
    console.log(this.searchInput);

    this.dataService.updateData(this.searchInput);

  }



}
