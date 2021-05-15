import { AfterViewInit, Component, DoCheck, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { LANGUAGES } from './Constants';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, DoCheck {
  constructor(public linguaSer: LanguageService) { }
  LINGUE = LANGUAGES;
  title = 'cv-angular';
  @ViewChild('mySideNav') sideBar: ElementRef;
  @ViewChild('myContent') content: ElementRef;
  menuVisibile = true;
  closed = true;
  lang: LANGUAGES;

  ngDoCheck(): void {
    this.checkHeight();
  }

  checkHeight(): void {
    // if (this.sideBar && this.sideBar.nativeElement.style.display !== 'none') {
    //   if (this.sideBar.nativeElement.clientHeight > this.content.nativeElement.clientHeight) {
    //     const px = this.sideBar.nativeElement.clientHeight + 'px';
    //     this.content.nativeElement.style.minHeight = px;
    //   } else if (this.sideBar.nativeElement.clientHeight < this.content.nativeElement.clientHeight) {
    //     const px = this.content.nativeElement.clientHeight + 'px';
    //     this.sideBar.nativeElement.style.minHeight = px;
    //   }
    // }
  }

  ngAfterViewInit(): void {
    console.log(window.location);
    if (window.innerWidth < 760) {
      this.menuVisibile = true;
      this.closed = false;
      // this.closeNav();
      this.openNav();
    } else {
      this.menuVisibile = false;
      this.closed = true;
      this.openNav();
    }
  }

  changeLang(): void {
    this.linguaSer.getLingua() === LANGUAGES.italiano
      ? this.linguaSer.changeLang(LANGUAGES.inglese) : this.linguaSer.changeLang(LANGUAGES.italiano);
  }

  closeNav(): void {
    this.sideBar.nativeElement.style.display = 'none';
    this.closed = true;
  }
  openNav(): void {
    this.sideBar.nativeElement.style.display = 'block';
    this.closed = false;
  }

  @HostListener('window:scroll', []) onWindowScroll(): void {
    this.scrollFunction();
  }
  // When the user scrolls down 20px from the top of the document, show the button
  scrollFunction(): void {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('myBtn').style.display = 'block';
    } else {
      document.getElementById('myBtn').style.display = 'none';
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
