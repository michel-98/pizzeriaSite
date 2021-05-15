import { Component, Input, OnInit } from '@angular/core';
import { Elementi } from '../Modello';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html',
  styleUrls: ['./elemento.component.css']
})
export class ElementoComponent implements OnInit {


  @Input()
  elemento: Elementi;
  constructor() { }

  ngOnInit(): void {
  }


}
