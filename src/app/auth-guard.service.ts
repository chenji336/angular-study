import { Injectable } from '@angular/core'
import {
    Router,
    Route,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivate,
    CanActivateChild,
    CanLoad,
    NavigationExtras
} from '@angular/router'
import { AuthService } from './auth.service'

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    // 子路由不会触发canActivate
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('AuthGuard#canActive called');
        // console.log('ActivatedRouteSnapshot-route:', route)
        // console.log('RouterStateSnapshot-state:', state)

        let url: string = state.url;
        return this.checkLogin(url);
    }

    // 第一次进入还是会先进入canActivate.后面的就不需要了
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('AuthGuard#canActiveChild called', '下面的canActive是我调用的，不是框架自己调用的');
        // console.log('ActivatedRouteSnapshot-route:', route)
        // console.log('RouterStateSnapshot-state:', state)
        return this.canActivate(route, state);
    }

    // canLoad使用于懒加载，只有真正进入的时候才会去加载该文件，而canActive不行
    canLoad(route: Route): boolean {
        console.log('AuthGuard#canLoad called');
        let url: string = `/${route.path}`;
        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {

        if (this.authService.isLoggedIn) {
            return true;
        }

        let sessionId = 123456789;
        let navigationExtras: NavigationExtras = {
            queryParams: { session_id: sessionId},
            fragment: 'anchor'
        }

        this.authService.redirectUrl = url;
        this.router.navigate(['./login'], navigationExtras);
        return false;
    }
}