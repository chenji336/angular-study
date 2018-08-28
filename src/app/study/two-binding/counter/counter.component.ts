import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Output() showCount = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  @Input() count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  onClick() {
    console.log('inner:',this.count);
  }

}
