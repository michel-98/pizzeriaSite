import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import fileContent from './content.json';
import { Menu } from './Menu';
import fileMenu from './menu.json';

import { Elementi, ElementiMenu, Modello } from './Modello';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  modello: Modello;
  constructor(public linguaSer: LanguageService) { }

  ngOnInit(): void {
    this.modello = fileContent as Modello;
    const modelloNuovo = new Modello();
    const menu = fileMenu as Menu;
    modelloNuovo.elementiMenu = [];
    for (const categoria of menu.MenuCategories) {
      const elementoMenu = new ElementiMenu();
      elementoMenu.titolo = categoria.Name;
      modelloNuovo.elementiMenu.push(elementoMenu);
    }
    for (const elementoMenu of modelloNuovo.elementiMenu) {
      elementoMenu.elementi = [];
      const titoloJson = elementoMenu.titolo;
      for (const oggetto of menu.Items) {
        if (oggetto.MenuCategory === titoloJson) {
          const elemento = new Elementi();
          elemento.elemento = oggetto.Name;
          elemento.ingredienti = oggetto.Description;
          elemento.prezzo = '' + oggetto.Price;
          elemento.moneta = '€';
          elementoMenu.elementi.push(Object.assign({}, elemento));
        }
      }
    }
    this.modello.elementiMenu = [...modelloNuovo.elementiMenu];
  }

}
