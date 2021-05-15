import { Component, OnInit } from '@angular/core';
import { Modello } from '../content/Modello';
import fileContent from './../content/content.json';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  modello;
  isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
    this.modello = (fileContent as Modello);
    console.log(this.modello);
  }
  goTo(elemento): void {
    if (elemento) {
      if (document.getElementById(elemento)) {
        const scrollDiv = document.getElementById(elemento).offsetTop;
        window.scrollTo({ top: scrollDiv - 1000, behavior: 'smooth' });
      } else {
        console.error('Avvisare michele che c\'è un errore');
      }
    } else {
      console.error('Avvisare michele che c\'è un errore');
    }
    // console.log(document.getElementById(elemento));
  }
}
