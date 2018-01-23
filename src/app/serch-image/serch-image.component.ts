import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {KeywordService} from '../services/keyword.service';
import {SearchImageService} from '../services/searchImage.service';
import {IImage} from '../models/IImage';
import { forEach } from '@angular/router/src/utils/collection';
import {Router} from '@angular/router';

@Component({
  selector: 'app-serch-image',
  templateUrl: './serch-image.component.html',
  styleUrls: ['./serch-image.component.css']
})
export class SerchImageComponent implements OnInit {
  searchForm:FormGroup;
  images:IImage[];
  constructor(private keywordService:KeywordService,
              private searchImageService:SearchImageService,
              private myRoute:Router) {
      this.searchForm=new FormGroup({
        word:new FormControl("",[Validators.required])
      });
      this.images = [];
   }
   get word(){
     return this.searchForm.get('word');
   }
   display(data){
    var imgs=data.hits;
    for (let index = 0; index < imgs.length; index++) {
      this.images[index] = {id:index,url:imgs[index].previewURL}
    }
    this.searchImageService.storeImage(this.images);
    this.myRoute.navigate(['DisplayImage']);
    console.log(imgs);
    console.log(this.images);
   }
   errorDisplay(error){

   }
   searchImage(searchForm:FormGroup){
      if(searchForm.valid){
        this.keywordService.addKeyword(searchForm.value.word);
        return this.searchImageService.getImages(searchForm.value.word)
             .subscribe(data=>this.display(data),
             error=>this.errorDisplay(error))
      }
      //console.log(this.images);
   }
  ngOnInit() {
  }

}
