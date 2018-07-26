import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostListComponent } from './post-list/post-list.component';

import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
