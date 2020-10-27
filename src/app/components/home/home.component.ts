import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  user: any;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getUserRepositories('kelvinMakamu').subscribe((detail) => {
      this.user = detail;
    });
  }

}
