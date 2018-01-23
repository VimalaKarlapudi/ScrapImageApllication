import { Component, OnInit } from '@angular/core';
import {SearchImageService} from '../services/searchImage.service';
import {IImage} from '../models/IImage';
@Component({
  selector: 'app-display-images',
  templateUrl: './display-images.component.html',
  styleUrls: ['./display-images.component.css']
})
export class DisplayImagesComponent implements OnInit {
  images:IImage[];
  constructor(private SIS:SearchImageService) {
    this.images = this.SIS.images;
   }

  ngOnInit() {
  }

}
