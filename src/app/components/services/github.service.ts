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

  getUserRepositories(username: string): Observable<Repository[]>{
    let headers = new HttpHeaders().set('Authorization',`token ${environment.API_KEY}`);
    return this.httpClient.get<Repository[]>(`${environment.API_URL}/users/${username}/repos`,{ headers });
  }

  getRepository(repo: string,username: string): Observable<Repository[]>{
    let headers = new HttpHeaders().set('Authorization',`token ${environment.API_KEY}`);
    return this.httpClient.get<Repository[]>(`${environment.API_URL}/repos/${username}/${repo}`,{ headers });
  }

  constructor(private httpClient: HttpClient) { }
}
