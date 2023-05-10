import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Articolo } from './articolo';

@Component({
  selector: 'articolo',
  templateUrl: 'articolo.component.html',
  styleUrls: ['articolo.component.css']
})
export class ArticoloComponent {
  @Input() articolo!: Articolo ;
  @Output() like = new EventEmitter();
  constructor() {
  }
  incrementaApprezzamenti(event: Event) {
    // console.log(event);  
    // increment an articolo property  
    this.articolo.numApprezzamenti! += 1;
    //prevent event propagation on child component
    event.preventDefault();
    // event payload to pass to parent component
    this.like.emit({numApprezzamenti: this.articolo.numApprezzamenti});
  }
}
