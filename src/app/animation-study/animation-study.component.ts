import { Component, OnInit } from '@angular/core';
import { baseAnimation, tempAnimation } from '../anims/base.anim'
import { voidAnimation, autoCaclAnimation, framesAnimation, groupAnimation } from '../anims/void.anim'

@Component({
  selector: 'app-animation-study',
  templateUrl: './animation-study.component.html',
  styleUrls: ['./animation-study.component.css'],
  animations: [ baseAnimation, tempAnimation, voidAnimation, autoCaclAnimation, framesAnimation, groupAnimation ]
})
export class AnimationStudyComponent implements OnInit {

  state = 'inactive'
  showElement = true

  constructor() { }

  ngOnInit() {
  }

  changeState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  show() {
    this.showElement = !this.showElement;
  }

  baseStateStart(event) {
    console.log(event)
  }

  baseStateDone(event) {
    console.log(event)
  }
}
