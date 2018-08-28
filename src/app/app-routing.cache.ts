import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from "@angular/router";

export class AppRoutingCache implements RouteReuseStrategy {

    public static handlers: {[key: string]: DetachedRouteHandle} = {};

    shouldDetach(route: ActivatedRouteSnapshot) {
        console.log('shouldDetach-route:', route);
        console.log('shouldDetach-path:', route.routeConfig.path);
        if (route.data && route.data.keep) {
            return true;
        }
        return false;
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle) {
        console.log('store-handle:', handle);
        console.log('store-path:', route.routeConfig.path);
        AppRoutingCache.handlers[route.routeConfig.path] = handle;
    }

    shouldAttach(route: ActivatedRouteSnapshot) {
        console.log('shouldAttach-route:', route.routeConfig);
        console.log('store-path:', route.routeConfig.path);
        // 需要注意的点。配合懒加载使用，path会为空（‘’），因此通过判断component.name获取key
        const path = route.routeConfig.path === '' && route.routeConfig.component.name === 'StudyComponent' ? 'study' : route.routeConfig.path;
        return !!route.routeConfig && !!AppRoutingCache.handlers[path];
    }

    retrieve(route: ActivatedRouteSnapshot) {
        console.log('retrieve-route:', route.routeConfig);
        console.log('retrieve-AppRoutingCache.handlers[route.routeConfig.path]:', AppRoutingCache.handlers[route.routeConfig.path]);
        if (!route.routeConfig) {
            return null;
        }
        console.log('store-path:', route.routeConfig.path);
        const path = route.routeConfig.path === '' && route.routeConfig.component.name === 'StudyComponent' ? 'study' : route.routeConfig.path;
        return AppRoutingCache.handlers[path];
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot) {
        console.log('future.routeConfig == current.routeConfig:', future.routeConfig == current.routeConfig);
        return future.routeConfig == current.routeConfig;
    }
}