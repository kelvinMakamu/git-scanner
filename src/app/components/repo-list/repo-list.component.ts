import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../services/github.service';
import { Repository } from '../models/repository';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

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
