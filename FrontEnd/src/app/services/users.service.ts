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

}
