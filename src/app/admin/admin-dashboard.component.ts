import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  template:  `
    <p>Dashboard</p>

    <p>Session ID: {{ sessionId | async}}<p>
    <a id = 'anchor'></a>
    <p>Token: {{ token | async}}<p>
  `
})
export class AdminDashboardComponent implements OnInit { 
  sessionId: Observable<string>;
  token: Observable<string>;

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.sessionId = this.route
      .queryParamMap
      .pipe(map(params => params.get('session_id') || 'None'))
    
    this.token = this.route
      .fragment
      .pipe(map(fragment => fragment || 'None'))
  }
}