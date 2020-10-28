import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { RepoComponent } from './components/repo/repo.component';
import { NotSelectedComponent } from './components/not-selected/not-selected.component';
import { RepoDetailsComponent } from './components/repo-details/repo-details.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':username', component: RepoDetailsComponent },
    { path:  '',   component: NotSelectedComponent }
  ] },
  { path:   '',   redirectTo: '/home', pathMatch:   'full' },
  { path: '**',   redirectTo: '/home', pathMatch:   'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
