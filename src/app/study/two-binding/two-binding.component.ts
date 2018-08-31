import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-binding',
  templateUrl: './two-binding.component.html',
  styleUrls: ['./two-binding.component.css']
})
export class TwoBindingComponent implements OnInit {
  count = 12;
  fontSizePx = 15;
  constructor() { }

  ngOnInit() {
  }

  showCount() {
    // 在界面进行点击，你会发现打出来的count值没有改变
    // 如果想要进行双向绑定的话，可以通过ngModel以及NG_VALUE_ACCESSOR
    // 简单的就是通过点击事件再发送过来这边使用即可
    console.log('outter:', this.count);
  }

}
