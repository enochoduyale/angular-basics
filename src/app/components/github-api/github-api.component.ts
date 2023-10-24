import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { GithubService } from 'src/app/github.service';
import { GithubUser } from 'src/app/github-user';
@Component({
  selector: 'app-github-api',
  templateUrl: './github-api.component.html',
  styleUrls: ['./github-api.component.css']
})
export class GithubApiComponent {
  user$!: Observable<GithubUser>
  private searchTerms = new Subject<string>();


  constructor(private githubService:GithubService){}
  
  search(username: string):void{
    this.searchTerms.next(username)
  }

  ngOnInit(): void{
    this.user$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((username: string) => this.githubService.searchUser(username))

    )
  }
}
