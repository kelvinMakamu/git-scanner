import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { environment } from '../../../environments/environment';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  user: User;
  repos: any;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getUserDetails(environment.USER).subscribe((details) => {
      this.user = details;
    });
    this.githubService.getUserRepositories(environment.USER).subscribe((detail) => {
      this.repos = detail;
    });
  }

}
