import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubEmojisService {
  private static URL = 'https://api.github.com/emojis';
  private list: Object;

  constructor(private http: HttpClient) { }

  getList(forceReload: boolean = false): Observable<Object> {
    if (this.list == null || forceReload) {
      const observable = this.http.get(GithubEmojisService.URL);

      observable.subscribe(list => {
        this.list = list;
      });

      return observable;
    } else {
      return of(this.list);
    }
  }
}
