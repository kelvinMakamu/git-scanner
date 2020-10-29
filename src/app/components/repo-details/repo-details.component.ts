import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Repository } from '../models/repository';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {
  
  @Input() repo: Repository;
  
  language: string; 

  languageColor: string;

  constructor() { }

  ngOnInit(): void {
    this.language      = this.repo.language == null ? 'HTML' : this.repo.language;
    this.languageColor = environment.LANGUAGE_COLORS[this.language].color;
  }

}
