import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GithubUser } from './github-user';
import { tap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  client_id = 'de6897226e61624635d6';
  client_secret = '566a825292682c225779f682d141fb32ff9b72f8';

  constructor(private http: HttpClient) { }

  searchUser(username: string): Observable<GithubUser>{
    if(!username.trim()){
      return of()
    }
    return this.http.get<GithubUser>(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`).pipe(
      tap(value => console.log(value)),
      catchError(err => {
        console.log(err)
        return of()
      })
    )

  }
}
