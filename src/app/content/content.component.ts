import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import fileContent from './content.json';
import { Modello } from './Modello';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  modello: Modello;
  constructor(public linguaSer: LanguageService) { }

  ngOnInit(): void {
    this.modello = fileContent;
  }

}
