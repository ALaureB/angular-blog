import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from './services/posts.service';
import { Subscription } from 'rxjs';
import { Post } from './models/Post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPostsSubject();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
