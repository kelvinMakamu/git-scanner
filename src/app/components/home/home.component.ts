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

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getUserDetails(environment.USER).subscribe((detail) => {
      this.user = detail;
    });
  }

}
