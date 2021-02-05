import { Component, NgModule, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { RoomService } from 'src/app/services/room.service';
import { Router, NavigationExtras } from '@angular/router';
import { UserComponent } from '../user/user.component';
@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})

export class RegistryComponent implements OnInit {
  creatorName = '';
  createRoomName = '';
  userName = '';
  joinRoomName = '';
  votingSystemSelected = 'Fibonacci';
  userSesion: User = {
    name : "",
    room : "" , 
    votation : false,
    score : 0,
  };

 

  constructor(public userService: UserService, public roomService: RoomService
    , private router: Router) { }

  ngOnInit(): void {
    // console.log(this.nameValue);
    this.getTheVotingSystens();
    console.log(this.userService.votingSystemData);

  }
  selectChangeHandler(event: any) {
    this.votingSystemSelected = event.target.value;


  }
  onKey(event: any) { // without type info
    this.creatorName = event.target.value;
  }
  onKey2(event: any) { // without type info
    this.createRoomName = event.target.value;
  }
  onKey3(event: any) { // without type info
    this.userName = event.target.value;
  }
  onKey4(event: any) { // without type info
    this.joinRoomName = event.target.value;
  }

  async createUser() {
    let createUser = {
      name: this.creatorName,
      room : this.createRoomName , 
      votation: false,
      score: 0,

    }
     this.userService.createUser(createUser).subscribe(
      // res => this.userService.userSesion = res ,  
      (res) => {
        this.userSesion = res
        this.createNewRoom(this.userSesion)
       // return res
      });

  }
  createNewRoom(myUser:User){

    let createRoom = {
      codeRoom: this.createRoomName,
      userAdmin: this.creatorName,
      typeOfRoom: this.votingSystemSelected,
      active: true,

    }
    this.roomService.createRoom(createRoom).subscribe(
      res => {
        this.roomService.roomSesion = res,
        console.log(myUser);
        this.router.navigate(['/room/'+ this.createRoomName + '/' + myUser._id ]);
      },

      err => console.error(err)
    )
  }

  joinRoom() {
    
    let createUser = {
      name: this.userName,
      room : this.joinRoomName , 
      votation: false,
      score: 0,

    }
     this.userService.createUser(createUser).subscribe(
      // res => this.userService.userSesion = res ,  
      (res) => {
        this.userSesion = res
        this.router.navigate(['/room/'+ this.joinRoomName + '/' + this.userSesion._id ]);
      });

  }

  getTheVotingSystens() {
    this.userService.getVotingSystems().subscribe(
      res => {
        this.userService.votingSystemData = res;
        // this.userData = res ;
        console.log(res);



      },
      err => console.error(err)


    )
  }


}
