import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import {  User} from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersData:User[] = []; 
  url_api = 'http://localhost:8000/api/users' ;
 
  constructor(private http: HttpClient){
   // this.usersData = User[]; 
  }
  
  getUsers(){
   
      return this.http.get<User[]>(this.url_api) ;
      console.log("hope it works" , this.usersData);
      
  }
}
