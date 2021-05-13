import { Injectable } from '@angular/core';
import fileLingua from './lang.json';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private lingua: 'ita' | 'eng';
  private file;
  constructor() {
    this.lingua = 'ita';
    this.file = fileLingua.ita;
    this.setDefLang();
  }
  getLingua(): string {
    return this.lingua;
  }
  setLingua(lang): void {
    this.lingua = lang;
  }
  getFile(): any {
    return this.file;
  }
  changeLang(lang): void {
    this.setLingua(lang);
    this.file = fileLingua[lang];
    localStorage.setItem('lingua', lang);
  }
  setDefLang(): void {
    this.file = fileLingua.ita;
    const lang = localStorage.getItem('lingua');
    if (lang) {

      this.setLingua(lang);
      this.file = fileLingua[lang];
    }
  }
}
