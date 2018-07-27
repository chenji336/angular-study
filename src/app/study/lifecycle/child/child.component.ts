import {
  Component,
  OnChanges,
  OnInit,
  AfterViewInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy,
  Input,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';


// implements后面对应着lifecycle顺序
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() hero: { name: string };
  @Input() power: string;

  @Output() triggerParentFn = new EventEmitter();

  // 用来测试OnChanges不适用使用@Input changeLog，就算changeLog清空，但是还会触发ngOnChanges
  // @Input() changeLog: string[];
  changeLog: string[] = [];
  changeDetected = false;
  oldHeroName = '';
  oldPower = '';
  oldLogLength = 0;
  noChangeCount = 0;

  // 测试父组件AfterView生命周期的变化
  childInput: string;

  constructor() { }

  /**
   * 如果改变的只是对象的属性，那么不触发ngOnChanges（想要触发，可以去ngDoCheck中进行修改）
   * @param arg {input1:{currentValue:xx,firstChange:xx,previousValue:xx}}
   */
  ngOnChanges(changes: SimpleChanges) {
    // 有@Input 的时候才会触发，并且第一次触发顺序优先于OnInit
    // react=didMount+receiveProps
    console.log('ngOnchanges:', changes)

    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }

  }

  /**
   * 只执行一次，一般用来加载初始化数据
   */
  ngOnInit() {
    // 调试阶段可以发现，该阶段组件没有渲染出来
    console.log('ngOnInit');
  }

  // 触发条件：界面改变；焦点改变；对象属性改变等
  ngDoCheck() {
    console.log('ngDoCheck');

    // 在OnInit触发不了对象属性改变
    if (this.hero.name !== this.oldHeroName) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Hero name changed to "${this.hero.name}" from "${this.oldHeroName}"`);
      this.oldHeroName = this.hero.name;
    }

    if (this.power !== this.oldPower) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Power changed to "${this.power}" from "${this.oldPower}"`);
      this.oldPower = this.power;
    }

    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      // log that hook was called when there was no relevant change.
      let count = this.noChangeCount += 1;
      let noChangeMsg = `DoCheck called ${count}x when no change to hero or power`;
      if (count === 1) {
        // add new "no change" message
        this.changeLog.push(noChangeMsg);
      } else {
        // update last "no change" message
        this.changeLog[this.changeLog.length - 1] = noChangeMsg;
      }
    }

    this.changeDetected = false;

  }

  /**
   * 执行一次
   */
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }


  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    // 组件渲染出来
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  public reset() {
    this.changeLog = [];
  }

  onClick() {
    this.triggerParentFn.emit();
  }

}
