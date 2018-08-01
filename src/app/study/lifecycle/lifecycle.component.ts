import { Component, 
  OnInit, 
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
  DoCheck
} from '@angular/core';

import { ChildComponent } from './child/child.component'

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, AfterViewInit, AfterViewChecked, DoCheck {

  hero: {name: string};
  power: string;
  title = 'DoCheck';

  parentValue: string;
  showChildInput: string = '';

  // 这代表着Type   Selector代表的#后面的名称
  @ViewChild(ChildComponent) childView: ChildComponent;

  constructor() {
    this.reset();
   }

  ngOnInit() {

  }

  ngDoCheck() {
    // 在viewChild input改变的时候docheck也可以获取到input里面的值（没有发现跟AfterView本质区别）
    console.log('ngDoCheck-this.childView.childInput:', this.childView.childInput);
    // this.showChildInput = this.childView.childInput // 不会报错，因为在视图渲染之前已经赋值
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit-this.childView.childInput:', this.childView.childInput);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked-this.childView.childInput:', this.childView.childInput);
    // this.showChildInput = this.childView.childInput // 会报错，因为在视图组合好之后还想渲染一波（Angular 的“单向数据流”规则禁止在一个视图已经被组合好之后再更新视图。 而这两个钩子都是在组件的视图已经被组合好之后触发的。）
    // this.showChildInput = this.parentValue // 会报错，因为在视图组合好之后还想渲染一波

    // 解决方案
    if (this.showChildInput !== this.childView.childInput ) {
      setTimeout(() => {
        this.showChildInput = this.childView.childInput 
      },0)
    }
    

  }


  reset() {
    this.hero = {name: 'Windstorm'};
    this.power = 'sing';

    if (this.childView) { this.childView.reset(); }
  }

  triggerParentFn() {
    console.log('触发了lifecycle.component的triggerParentFn方法');
  }

}



