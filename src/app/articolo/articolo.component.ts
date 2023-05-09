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
  }
  incrementaApprezzamenti(event: Event) {
    console.log(event);  
    /* increment an articolo property */    
    this.articolo.numApprezzamenti! += 1;
    /* prevent event propagation on child component  */
    event.preventDefault();
  }
}
