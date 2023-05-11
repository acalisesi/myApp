import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { Articolo } from './articolo';

@Component({
  selector: 'articolo',
  templateUrl: 'articolo.component.html',
  styleUrls: ['articolo.component.css']
})
export class ArticoloComponent implements OnInit, OnChanges {
  @Input() articolo!: Articolo ;
  @Output() like = new EventEmitter();
  constructor() {
  }
  ngOnInit(): void {
    console.log("The component articolo is on init phase")
  }
  ngOnChanges(changes: SimpleChanges): void {
    if ( changes["articolo"] && changes["articolo"].currentValue.testo) {
      let value = changes["articolo"].currentValue.testo
      console.log(`articolo.testo is changed; its value is: ${value}`)
    }
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
