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
  elementsSystemVoting: Number[]= [] ;
  url_api_users = 'http://localhost:8000/api/users' ;
  url_api_votingSystems = 'http://localhost:8000/api/system' ;

  constructor(private http: HttpClient){
   // this.usersData = User[]; 
  }
  
  getUsers(room: string | any ){

      return this.http.get<User[]>(this.url_api_users + `/${room}`) ;
    
      
  }
  createUser(user: User){
    //return this.http.post(this.url_api , user , {responseType: 'text'}); 
    return this.http.post<User>(this.url_api_users , user ); 
  }
  updateUser(user: User){
    //return this.http.post(this.url_api , user , {responseType: 'text'}); 
    return this.http.put<User>(this.url_api_users + `/${user._id}` , user ); 
  }

  getVotingSystems(){
    //return this.http.post(this.url_api , user , {responseType: 'text'}); 
    return this.http.get<VotingSystem[]>(this.url_api_votingSystems); 
  }

  getVotingSystem(typeOfRoom: string | any){
    //return this.http.post(this.url_api , user , {responseType: 'text'}); 
    return this.http.get<VotingSystem>(this.url_api_votingSystems+ `/${typeOfRoom}`); 
  }
}
