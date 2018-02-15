import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
users:User[];
username:string;
show:boolean=false;

  constructor(private userService:UserService) {  
    this.users=this.userService.getUser();
    console.log(this.users);
    console.log("i am from database");}
 
  showDet(){
    this.show=!this.show;
  }
  ngOnInit() {
  }

}
