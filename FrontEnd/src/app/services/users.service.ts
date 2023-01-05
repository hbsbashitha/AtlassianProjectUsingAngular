import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


   GetUsers(){
    return this.http.get('https://fakestoreapi.com/users');
  }
  GetUser(){
    return this.http.get('https://fakestoreapi.com/users/1');
  }

  UserAuthentication(userName: any, password: any){
    // console.log(userName);
    // console.log(password);
    var user=false;
    // this.GetUser().subscribe((data:any)=>{
    //   console.log(data);
    //   if(userName=="test" && password=="test"){
    //     localStorage.setItem('userToken',data.username);
    //     user= true;
    //   }
    // }

    // );

    if(userName=="test" && password=="test"){
      // localStorage.setItem('userToken',data.username);
      user= true;
    }
    return user;
  }



}
