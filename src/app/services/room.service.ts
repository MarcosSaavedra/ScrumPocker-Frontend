import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import {  Room} from '../models/room';
@Injectable({
  providedIn: 'root'
})
export class RoomService {
  votingSystemData: Room[]= [] ;
  roomSesion: Room [] = [] ; 
  url_api_room = 'http://localhost:8000/api/room' ;
  constructor(private http: HttpClient) { }

  createRoom(room: Room){
    //return this.http.post(this.url_api , user , {responseType: 'text'}); 
    return this.http.post<Room []>(this.url_api_room , room ); 
  }

}