import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FrontEnd';
  constructor(){
    console.log(sessionStorage.getItem('token'));
    console.log(sessionStorage.getItem('isLogin'));

 

  }
}
