import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RepoComponent } from './components/repo/repo.component';
import { UsersComponent } from './components/users/users.component';
import { NotSelectedComponent } from './components/not-selected/not-selected.component';
import { RepoDetailsComponent } from './components/repo-details/repo-details.component';
import { RelativeTimePipe } from './components/pipes/relative-time.pipe';
import { RepoLanguageDirective } from './components/directives/repo-language.directive';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { SearchComponent } from './components/search/search.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RepoComponent,
    UsersComponent,
    NotSelectedComponent,
    RepoDetailsComponent,
    RelativeTimePipe,
    RepoLanguageDirective,
    RepoListComponent,
    SearchComponent,
    SearchFormComponent,
    SearchResultComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
