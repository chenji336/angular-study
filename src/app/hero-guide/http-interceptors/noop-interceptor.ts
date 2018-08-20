import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
    // 拦截器 = request请求（pipe之前） + response返回（触发pipe，可以看头信息）
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('hello-interceptor：', req);
        // nexxt.handle进入下一个拦截器。不用next.handle返回一个Observable固定对象也行，express.js就是这么弄的
        return next.handle(req).pipe(
            tap(event => console.log('event:', event))
        );
    }
}