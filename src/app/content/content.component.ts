import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
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
  constructor(public linguaSer: LanguageService, private httpClient: HttpClient) { }

  async ngOnInit(): Promise<void> {
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
          elemento.elemento = oggetto.Name.trim();
          elemento.ingredienti = oggetto.Description;
          elemento.prezzo = '' + oggetto.Price;
          elemento.moneta = '€';
          elemento.immagine = await this.fileExists(elemento.elemento) ? elemento.elemento : null;
          elementoMenu.elementi.push(Object.assign({}, elemento));
        }
      }
    }
    this.modello.elementiMenu = [...modelloNuovo.elementiMenu];
  }

  async fileExists(img: string): Promise<boolean> {
    const url = './../../assets/' + img + '.jpg';
    let response;
    try {
      response = await this.httpClient.get(url)
        .pipe(
          map(() => {
            return true;
          })
        ).toPromise();
    } catch (error) {
      if (error.status === 200) {
        response = true;
      } else {
        if (error.status === 404) {
          console.log(error);
        } else {
          throw new Error('This request has failed ' + error.status);
        }
        return false;
      }
    }
    if (response) {
      console.log(response);
    }
    return response;

  }

  handleError(error): void {
    if (error.status === 404) {
      console.log(error);
    } else {
      throw new Error('This request has failed ' + error.status);
    }
  }

}
