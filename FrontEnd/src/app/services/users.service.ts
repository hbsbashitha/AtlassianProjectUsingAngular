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

  public UserAuthentication(username: any, password: any){
    // console.log(username)
//     return this.http.post<any>('https://fakestoreapi.com/auth/login',{

//         username: username,
//         password: password

// });


return this.http.post<any>('https://fakestoreapi.com/auth/login', { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                sessionStorage.setItem('user', JSON.stringify(user));

                return user;
            }));

  }

  public Logout(){
    // remove user from local storage to log user out
    sessionStorage.clear();

  }

}


