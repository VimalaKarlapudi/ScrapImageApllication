import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Response} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class UserService{
    users:User[];
    constructor(private http:Http){
        this.users=[];
    }
    getUserDatabase(){
        return this.http.get("http://localhost:3000/api/data");
    }
    getUser(){
        this.getUserDatabase().map((res:Response)=>res.json()).subscribe((data)=>{
            this.fillArray(data.data)
            console.log(data.data);
         });
        return this.users;
    }
    fillArray(details){
        var count:number=0;
        details.forEach(element=>{
            this.users[count]=new User(element.username,element.password);
            count++;
        });  
    }
    addUsers(user:User){
        this.users.push(user);
        console.log(this.users);        
        return this.users;  
    }
}