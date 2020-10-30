import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { NotSelectedComponent } from './components/not-selected/not-selected.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':username', component: RepoListComponent },
    { path:  '',   component: NotSelectedComponent }
  ] },
  { path: 'search', component: SearchComponent },
  { path:   '',   redirectTo: '/home', pathMatch:   'full' },
  { path: '**',   redirectTo: '/home', pathMatch:   'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
