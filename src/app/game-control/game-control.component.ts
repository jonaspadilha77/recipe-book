import { Component, OnInit, Output, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, DoCheck {

  // tslint:disable-next-line: no-output-native
  @Output() started = new EventEmitter<number>();
  number = 0;
  ref: any = '';


  constructor() { }

  ngOnInit() {
  }


  ngDoCheck() {
    console.log('number: ' +  this.number);
    this.started.emit(this.number);
  }

  onStart() {
    console.log('started..');
    this.ref = setInterval(() => {
      this.number = this.number + 1;
    }, 300);
  }

  onStop() {
    console.log('finished...');
    clearInterval(this.ref);
  }

  onReset() {
    console.log('reseted...');
    this.number = 0;
  }

}
