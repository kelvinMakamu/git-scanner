import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { environment } from  '../../../environments/environment';
import { User } from '../models/user';
import { Repository } from '../models/repository';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  repos: Repository[];

  getUserDetails(username: string): Observable<User>{
    let headers = new HttpHeaders().set('Authorization',`token ${environment.API_KEY}`);
    return this.httpClient.get<User>(`${environment.API_URL}/users/${username}`,{ headers });
  }

  getUserRepositories(username: string): Observable<Repository>{
    let headers = new HttpHeaders().set('Authorization',`token ${environment.API_KEY}`);
    this.httpClient.get<any>(`${environment.API_URL}/users/${username}/repos`,{ headers })
    .subscribe((repos) => {
      this.repos = repos;
    });
  }

  getRepository(repo: string): Observable<any>{
    let headers = new HttpHeaders().set('Authorization',`token ${environment.API_KEY}`);
    let params  = new HttpParams().set('q',repo);
    return this.httpClient.get<any>(`${environment.API_URL}/repositories`,{ headers, params });
  }

  constructor(private httpClient: HttpClient) { }
}
