import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { KeywordComponent } from './keyword/keyword.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { SerchImageComponent } from './serch-image/serch-image.component';
import {KeywordService} from './services/keyword.service';
import { ShowImagesComponent } from './show-images/show-images.component';
import {SearchImageService} from './services/searchImage.service';
import { DisplayImagesComponent } from './display-images/display-images.component';

var myRoutes:Routes=[
      {path:'keywords',component:KeywordsComponent,
        children:[{path:'keyword/:word',component:KeywordComponent}]},
      {path:'search',component:SerchImageComponent},
      {path:'DisplayImage',component:DisplayImagesComponent}]
@NgModule({
  declarations: [
    AppComponent,
    KeywordComponent,
    KeywordsComponent,
    SerchImageComponent,
    ShowImagesComponent,
    DisplayImagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes),
    HttpModule
  ],
  providers: [KeywordService,SearchImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
