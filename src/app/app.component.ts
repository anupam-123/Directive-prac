import { Component, EventEmitter, Output } from '@angular/core';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameControlComponent, EvenComponent, OddComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

oddNumbers: number[] = []
evenNumbers: number[] = []
onIntervalFired(firedNumber: number) {
  if (firedNumber % 2 === 0) {
    this.evenNumbers.push(firedNumber);
  } else {
    this.oddNumbers.push(firedNumber);
  }
}


}
