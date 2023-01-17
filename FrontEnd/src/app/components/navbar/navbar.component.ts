import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user=sessionStorage.getItem('token')
  isLogin = sessionStorage.getItem('isLogin')

  constructor(private  UsersService:UsersService) {
  }

  logOut(){
    this.UsersService.Logout()
    location.reload()
  }

}
