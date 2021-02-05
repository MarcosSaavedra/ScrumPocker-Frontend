import { Component, OnInit } from '@angular/core';
import {UserService } from '../../services/user.service';
import {  User} from '../../models/user';
import { RoomService } from 'src/app/services/room.service';
import { ɵDomSharedStylesHost } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData:User[] = []; 
  userSesion:User[] = []; 
  room: string | null = "" ; 
  votation: number = 0;
  idUser : string | null = ' ' ; 
  showResults: boolean = false ; 
  constructor(public userService: UserService , public roomService: RoomService , private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.room = this.route.snapshot.paramMap.get('idRoom');
    this.idUser = this.route.snapshot.paramMap.get('idUser');
    console.log(this.idUser);
    this.getTheUsers(this.room);
    this.getTheRoom(this.room); 
  }
  getItems(event:any){
   this.votation=event.target.value;
          console.log(this.votation);
          let createUser = {
            _id :  this.idUser?.toString() , 
        
            votation: true,
            score: this.votation,
      
          }
      this.userService.updateUser(createUser).subscribe(
        res  => console.log(res) , 
        err => console.error(err)   
      )
      this.getTheUsers(this.room)

  }
  getTheRoom(room: string | null){
    this.roomService.getRoom(room).subscribe(
      res => {
        console.log(res);
         let typeOfRoom = res.typeOfRoom; 
         console.log(res.typeOfRoom);
         
         this.userService.getVotingSystem(typeOfRoom).subscribe(
          res => {
           
             this.userService.elementsSystemVoting = res.numbers;
          }
         )
      }, 
      err => console.error(err)
      
      
    )
  }
  getTheUsers(room: string | null){
    this.userService.getUsers(room).subscribe(
      res => {
         this.userService.usersData = res; 
        // this.userData = res ;
        console.log(res);
        console.log(this.userData);
        
        console.log(this.userService.usersData);
        

      }, 
      err => console.error(err)
      
      
    )
  }
  actualizateResults(){
    this.showResults = true ; 
  }
  actualizateTable(){
    this.getTheUsers(this.room);
  }
    
   
}
