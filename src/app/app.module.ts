import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Route,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserdataComponent } from './userdata/userdata.component';
import {UserService} from './services/user.service';

const myRoutes:Route[]=[  
  {path:'new',component:SignupComponent},
  {path:'login',component:LoginComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    UserdataComponent, 
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,RouterModule.forRoot(myRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
