import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-even',
  standalone:true,
  templateUrl: './even.component.html',
  styleUrl: './even.component.css'
})
export class EvenComponent {
number: number = 0
@Input()
numbers: number = 0;

handleEvent(event: number) {
  this.number = event
}
}
