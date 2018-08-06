import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

@Injectable()
export class DialogService {

    confirm(message?: string): Observable<boolean> {
        const confirmation = window.confirm(message || 'Is it ok?');
        return of(confirmation);
    }
}