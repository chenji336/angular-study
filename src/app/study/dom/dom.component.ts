import { 
  Component, 
  OnInit, AfterViewInit,
  ElementRef, ViewChild, Renderer2 
} from '@angular/core';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.css']
})
export class DomComponent implements OnInit, AfterViewInit {

  @ViewChild('sharpP') // sharpP是dom元素赋值的#后面的名字
  sharpPP: ElementRef

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  // 一般用来初始化调用数据的地方（）
  ngOnInit() {
    // console.log('ngOnInit');

    // 不建议再ngOnInit里面调用dom，下面getDomByNative执行获取不到p（应该是因为还没有渲染出来，不过不知道为啥ElementRef是可行的）
    // this.getDomByNative()
    // this.getDomByElemenRef()
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit');
    this.getDomByNative()
    this.getDomByElemenRef()
  }

  // 通过最原生的方法获取dom
  getDomByNative() {
    const p = document.querySelector('p');
    // console.log("document.querySelector('p'):", p);
  }

  // 通过ElementRef获取
  getDomByElemenRef() {
    const pNative = this.elementRef.nativeElement.querySelector('p');
    // console.log("this.elementRef.nativeElement.querySelector('p'):", pNative);
  }

  // 通过ViewChild获取
  setDomByViewChild() {
    this.sharpPP.nativeElement.style.backgroundColor = 'red';
    // console.log('this.sharpP.nativeElement:', this.sharpP.nativeElement);
  }

  // 优化setDomByVIewChild
  optimizeSetDomByViewChild() {
    this.renderer.setStyle(this.sharpPP.nativeElement, 'backgroundColor', 'yellow')
  }

  // 修改背景色
  changeBgColor() {
    this.setDomByViewChild();
    this.optimizeSetDomByViewChild();
  }

}
