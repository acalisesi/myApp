import { Component } from '@angular/core';
//import { ArticoloComponent } from './articolo/articolo.component';
import { Articolo } from './articolo/articolo';
import { ArticoliService } from './articoli.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp-Andrea';
  myArticolo: Articolo;
  elencoArticoli: Array<Articolo>;
  constructor(private articoliService: ArticoliService) {
    this.myArticolo = {
      titolo : "Angular component example",
      autore : "Geppo the Foolish",
      testo : "Try component creation: it's very simple. - In Italian: è molto semplice",
      numApprezzamenti : 0
    };
    this.elencoArticoli = articoliService.getArticoli(); 
  }
  mostraMessaggioRingraziamento(event:any) {
    //console.log(event);
    let value:number = event.numApprezzamenti;
    let alertMessage:string = `Grazie per aver espresso il tuo apprezzamento per l'articolo! \nIl numero di apprezzamenti raggiunti è ${value}`;
    alert(alertMessage);
  }
  addArticolo(articolo:Articolo){
    this.articoliService.addArticolo(articolo);
    console.log(`numero Articoli: ${this.articoliService.getArticoli().length}`)
  }
}