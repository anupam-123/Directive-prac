import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-odd',
  standalone: true,
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css'
})
export class OddComponent {
  @Input()
  numbers: number = 0;

  // handleEvent(event: number) {
  //   this.number = event
  // }
}
