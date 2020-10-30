import { Component, OnInit } from '@angular/core';

import { AlertService } from '../services/alerts/alert.service';
import { environment } from '../../../environments/environment';
import { GithubService } from '../services/github.service';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users: User[];

  constructor(private githubService: GithubService, private alertService:AlertService) { }
  
  ngOnInit(): void {
    this.githubService.getUsersAvailable().subscribe(
      (members)=>this.users = members,
      (err:any) => {
        this.alertService.danger(`<strong>${err.name}!</strong> ${err.message}`,environment.ALERT_OPTIONS);
      },
      () => {
        this.alertService.success(`Sample Github accounts successfully loaded`,environment.ALERT_OPTIONS)
      }
    );
  }

}
        
        