import { Component, EventEmitter, Output } from '@angular/core';
import { Articolo } from '../articolo/articolo';

@Component({
  selector: 'articolo-form',
  templateUrl: './articolo-form.component.html',
  styleUrls: ['./articolo-form.component.css']
})
export class ArticoloFormComponent {
  @Output() mySubmit = new EventEmitter<Articolo>();
  model: Articolo;
  constructor() {
    this.model = new Articolo();
  }
  inviaArticolo() {
    console.log(`inviaArticolo da form component`)
    this.mySubmit.emit(this.model);
  }

}
