import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users: User[];

  constructor(private githubService: GithubService) { }
  
  ngOnInit(): void {
    this.githubService.getUsersAvailable().subscribe((members)=>{
      this.users = members;
    });
  }

}
