import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Search } from '../models/search';
import { GithubService } from '../services/github.service';
import { Repository } from '../models/repository';
import { User } from '../models/user';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  
  model = new Search('','');

  @Output() searchRepo = new EventEmitter<any>();
  
  searchRepository(){
    this.searchRepo.emit(this.model);
  }

  constructor() { }

  ngOnInit(): void {}

}
