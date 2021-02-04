import { Component, OnInit } from '@angular/core';
import {UserService } from '../../services/user.service';
import {  User} from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData:User[] = []; 
  constructor(public userService: UserService) { }
 
  ngOnInit(): void {
    this.getTheUsers();
    // this.userService.getUsers().subscribe(
    //   res => console.log(res),
    //   err => console.error(err)
      
    // )
  }
  getTheUsers(){
    this.userService.getUsers().subscribe(
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
    
   
}
