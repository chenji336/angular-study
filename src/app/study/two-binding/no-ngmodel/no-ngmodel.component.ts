import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-no-ngmodel',
  templateUrl: './no-ngmodel.component.html',
  styleUrls: ['./no-ngmodel.component.css']
})
export class NoNgmodelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // 准讯x和xChange进行双向绑定
  @Input()  size: number | string;
  @Output() sizeChange = new EventEmitter<number>();
 
  dec() { this.resize(-1); }
  inc() { this.resize(+1); }
 
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

}
