import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../anims/router.anim'

@Component({
  selector: 'app-hero-guide',
  templateUrl: './hero-guide.component.html',
  styleUrls: ['./hero-guide.component.css'],
  animations: [slideInDownAnimation]
})
export class HeroGuideComponent {
  title = 'Tour of Heroes';

  // 代表中属性里面引用的是下面的值（routeAnimation)，并且初始值已经写好
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
}
