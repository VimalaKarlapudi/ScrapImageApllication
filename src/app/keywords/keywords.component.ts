import { Component, OnInit } from '@angular/core';
import { KeywordService } from '../services/keyword.service';
import {Keyword} from '../models/keyword.model';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.css']
})
export class KeywordsComponent {
keywords:Keyword[];
  constructor(private keywordService:KeywordService) { 
    this.keywords = this.keywordService.getKeywords();
  }



}
