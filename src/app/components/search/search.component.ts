import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

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
      (details: any) => this.results = details,
      (err:    any)  => {
          alert("An Error was experienced");
          this.emptySearchResults()
        },
      ()             => alert('loading completed')
    );
  }

  emptySearchResults(){
    this.results = [];
  }

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

}
