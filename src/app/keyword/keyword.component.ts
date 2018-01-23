import { Component, OnInit,Input } from '@angular/core';
import {Keyword} from '../models/keyword.model';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.css']
})
export class KeywordComponent implements OnInit {
@Input() keyword:Keyword;
  constructor() { }

  ngOnInit() {
  }

}
