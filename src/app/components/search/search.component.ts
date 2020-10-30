import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { AlertService } from '../services/alerts/alert.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  results: any;

  searchGithub(model: any): any {
    this.githubService.searchGithub(model.searchCategory,model.searchText)
    .subscribe(
      (details:any) => this.results = details,
      (err:any) => {
          this.alertService.danger(`<strong>${err.name}!</strong> ${err.message}`,environment.ALERT_OPTIONS);
          this.emptySearchResults();
        },
      () => this.alertService.success(`Repositories loaded successfully.`,environment.ALERT_OPTIONS)
    );
  }

  emptySearchResults(){
    this.results = [];
  }

  constructor(private githubService: GithubService, private alertService: AlertService) { }

  ngOnInit(): void {
  }

}
