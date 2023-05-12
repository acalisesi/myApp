import { Component } from '@angular/core';
import { ArticoliService } from '../articoli.service';

@Component({
  selector: 'articolo-lista',
  templateUrl: './articolo-lista.component.html',
  styleUrls: ['./articolo-lista.component.css']
})
export class ArticoloListaComponent {
  elencoArticoli;
  constructor(private articoliService: ArticoliService) {
    this.elencoArticoli = articoliService.getArticoli(); 
  }
}
