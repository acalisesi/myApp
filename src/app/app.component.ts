import { Component } from '@angular/core';
import { ArticoloComponent } from './articolo/articolo.component';
import { Articolo } from './articolo/articolo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp-Andrea';
  myArticolo: Articolo;
  constructor() {
    this.myArticolo = {
      titolo : "Angular component example",
      autore : "Geppo the Foolish",
      testo : "Try component creation: it's very simple.",
      numApprezzamenti : 0
    };
  }
}
