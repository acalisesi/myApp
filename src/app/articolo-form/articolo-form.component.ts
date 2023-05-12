import { Component, EventEmitter, Output } from '@angular/core';
import { Articolo } from '../articolo/articolo';
import { ArticoliService } from '../articoli.service';
@Component({
  selector: 'articolo-form',
  templateUrl: './articolo-form.component.html',
  styleUrls: ['./articolo-form.component.css']
})
export class ArticoloFormComponent {
  @Output() mySubmit = new EventEmitter<Articolo>();
  model: Articolo;
  constructor(private articoliService: ArticoliService) {
    this.model = new Articolo();
  }
  inviaArticolo() {
    console.log(`inviaArticolo da form component`)
    // old: for old tag in app.component
    this.mySubmit.emit(this.model);
    // new: call service
    this.articoliService.addArticolo(this.model);
  }

}
