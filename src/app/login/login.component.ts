import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import{Route,RouterModule} from '@angular/router';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup;
  user:User;
  a:string;
  b:string;
  msg:string;
  constructor(private myRoute:Router,private userService:UserService) {
    this.user=new User("","");
    this.myForm=new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
   }
   get username(){
    return this.myForm.get('username');
  }
  get password(){
    return this.myForm.get('password');
  }
  addUser(myForm:FormGroup)
  {
    console.log("qwerty");
    if(myForm.valid)
    { 
      this.user.username=myForm.value.username;
      this.user.password=myForm.value.password;
      this.userService.addUsers(this.user);
      this.msg="ur details are added";
    }
    else if((myForm.value.username=="")&&(myForm.value.password==""))
    {
      this.msg="plz enter ur details";
    }
  }
  ngOnInit() {
  }

}
