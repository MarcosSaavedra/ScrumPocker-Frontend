import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import {  User} from '../models/user';
import {  VotingSystem} from '../models/votingSystem';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersData:User[] = []; 
  votingSystemData: VotingSystem[]= [] ;
  userSesion: User [] = [ ] ; 
  url_api_users = 'http://localhost:8000/api/users' ;
  url_api_votingSystems = 'http://localhost:8000/api/system' ;

  constructor(private http: HttpClient){
   // this.usersData = User[]; 
  }
  
  getUsers(){
   
      return this.http.get<User[]>(this.url_api_users) ;
    
      
  }
  createUser(user: User){
    //return this.http.post(this.url_api , user , {responseType: 'text'}); 
    return this.http.post<User>(this.url_api_users , user ); 
  }

  getVotingSystems(){
    //return this.http.post(this.url_api , user , {responseType: 'text'}); 
    return this.http.get<VotingSystem[]>(this.url_api_votingSystems); 
  }
}
