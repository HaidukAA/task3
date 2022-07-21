import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { FeedComponent } from './feed/feed.component';
import { ErrorComponent } from './error/error.component';
import { ErrorBlackComponent } from './error-black/error-black.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  {path: '', component: FeedComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'erro404', component: ErrorComponent},
  {path: 'erro404black', component: ErrorBlackComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    FeedComponent,
    ErrorComponent,
    ErrorBlackComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
