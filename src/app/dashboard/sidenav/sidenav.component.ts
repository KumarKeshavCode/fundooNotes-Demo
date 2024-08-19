import { Component } from '@angular/core';
import { OpensidenvService } from 'src/app/services/opensidenav/opensidenv.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  flag!:string;
  constructor(private os:OpensidenvService){}
  ngOnInit(): void {
    this.os.flag.subscribe(flag => this.flag = flag);
    console.log(this.flag);
  }
  changeColor(e:any){
    console.log(e);
  }

}
