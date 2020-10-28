import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Repository } from '../models/repository';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {
  
  repos: Repository[];

  constructor(private activatedRoute: ActivatedRoute, private githubService: GithubService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.githubService.getUserRepositories(param.username).subscribe((details)=>{
        this.repos = details;
      })
    })
  }

}
