import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs';

export interface CanComponentDeactive {
    canDeactive: () => Observable<boolean> | Promise<boolean> | boolean
}

// <T>跟canDeactive参数中的T对应
export class CanDeactiveGuard implements CanDeactivate<CanComponentDeactive> {
    canDeactivate(component: CanComponentDeactive,route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return component.canDeactive ? component.canDeactive() : true;
    }
}