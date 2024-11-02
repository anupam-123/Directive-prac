import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EvenComponent } from '../even/even.component';

@Component({
  selector: 'app-game-control',
  standalone: true,
  imports:[EvenComponent],
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  increment: number = 0;
  @Output()
  emitter = new EventEmitter<number>();
  interval;
  startNumber() {
    this.interval = setInterval(() => {
      this.emitter.emit(this.increment + 1);
      console.log(this.increment + 1);
      this.increment++;
    }, 1000);
  }

  pauseNumber() {
    clearInterval(this.interval);
    console.log('pause');
  }
  // @Input()
  // number: number = 0;

  // handleEvent(event: string) {
  //   console.log(event);
  }


