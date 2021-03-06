import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs'
import { catchError, map, tap, retry } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service'

import { Temp } from './temp'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class HeroService {
  // 用的内存方法，不过这样不好演示http请求，所以改成json-server --watch xxx.json方式查看
  // private heroesUrl = 'api/heroes'; // URL to web api
  private heroesUrl = 'http://localhost:3000/heroes'; // URL to web api

  // constructor里面添加的数据默认是service。所以引用的服务需要带有provider
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  getHeroes(): Observable<Hero[]> {
    // 把service当作存储数据的地方了（这里添加了，在组件里面也可以访问到，因为是单一实例）
    // this.log('fetched heroes.'); 放到pipe中

    // 简单的类，别的地方在new出来就获取不到这里的数据（上面的服务可以哦）
    const temp = new Temp()
    temp.data = ['1']


    this.http.get('http://localhost:3000/posts').pipe(
      tap(data => {
        console.log(`fetched data`);
        this.log(`fetched data`)}),
      // retry(2), // retry a failed request up to 2 times // 有些情况重试两次就好了，尤其是在移动端网络不好的情况下
      catchError(this.handleError('post'))
    ).subscribe(
      // success path
      (data: { id: number, title: string, author: string }[]) => {
        console.log('data:', data)
      },
      // error path(捕获错误信息) 不过错误应该在service中就捕获，而不是在组件里面，所以一般写在pipe里面
      // error => console.log('error:', error)
    )

    // 获取完整的响应信息 {observe: 'response'}
    this.http.get('http://localhost:3000/posts', { observe: 'response' }).pipe(
      tap(data => this.log(`fetched data`)),
      // catchError(this.handleError('getHeroes', []))
    ).subscribe(
      (resp: any) => {
        // display its headers
        console.log('data:', resp);
        
        // headers中有数据是可以通过keys直接取得的
        console.log(resp.headers.keys())
      },
      // error path(捕获错误信息)
      // error => console.log('error-response:', error)
    )

    // return of(HEROES) // 返回Observable
    return this.http.get<Hero[]>(this.heroesUrl).pipe(

      // 如果app.module中dataEncapsulation: true(返回的数据是{data:.....}),那么需要map进行转化成需要的数据
      // map((data: any) => { // 如果data没有给any类型，data.data会提示错误
      //   console.log(data);
      //   return data.data;
      // }),
      tap(heroes => this.log(`fetched heroes`)), // tap不会改变数据
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );  // 返回Observable
  }

  getHero(id: number): Observable<Hero> {

    const url = `${this.heroesUrl}/${id}`

    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetch hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>(`updated hero id=${hero.id}`))
    )
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log('added hero w/ id=${hero.id}')),
      catchError(this.handleError<Hero>('addHero'))
    )
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /** GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {

    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([])
    }

    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log('found heroes matching "${term}"')),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    )
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}.`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.否则就中断，message组件也会看不到
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {

      // if (error.error instanceof ErrorEvent) { 网路错误 
      // else 服务端错误

     
      // 官网的handleError例子
      // this.subHandleError(error);


      // TODO: send the error to remote logging infrastructure
      console.error('error:', error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      console.log(of(result as T)); // observable value=undefined
      return of(result as T);
    };
  }

  private subHandleError(error: HttpErrorResponse) {
    console.log('error.error instanceof ErrorEvent:',  error.error instanceof ErrorEvent);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}


