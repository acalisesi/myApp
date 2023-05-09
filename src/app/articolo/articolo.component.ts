import { Component, Input, OnInit} from '@angular/core';
import { Articolo } from './articolo';

@Component({
  selector: 'articolo',
  templateUrl: 'articolo.component.html',
  styleUrls: ['articolo.component.css']
})
export class ArticoloComponent {
  @Input() articolo!: Articolo ;
  constructor() {
    /*
    this.articolo = {
      titolo: "Angular component",
      autore: "Andrea Calisesi",
      testo:  "Try first component creation."
    };
    */
  }
}
