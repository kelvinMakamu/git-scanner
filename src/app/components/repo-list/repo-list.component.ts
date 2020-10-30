import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../services/github.service';
import { Repository } from '../models/repository';
import { environment } from '../../../environments/environment';
import { AlertService } from '../services/alerts/alert.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

  repos: Repository[];

  constructor(private activatedRoute: ActivatedRoute,
    private githubService: GithubService,
    private alertService:AlertService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.githubService.getUserRepositories(param.username).subscribe(
        (details) => this.repos = details,
        (err:any) => {
          this.alertService.danger(`<strong>${err.name}!</strong> ${err.message}`,environment.ALERT_OPTIONS);
        },
        () => {
          this.alertService.success(`User <strong>${param.username}</strong> repositories successfully loaded`,environment.ALERT_OPTIONS)
        }
      )
    })
  }
}