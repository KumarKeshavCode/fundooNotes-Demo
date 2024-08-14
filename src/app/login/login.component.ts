import { Component } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  
  states: string[] = [

    
'Afrikaans',
'azərbaycan',
'bosanski',
'català',
   ' Čeština',
'Cymraeg',
'Dansk',
'Dutch',
'Eesti',
'English (United Kingdom)',
'English (United States)',
'Español (España)',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  

}
