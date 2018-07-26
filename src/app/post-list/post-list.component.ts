import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnChanges, OnDestroy {
  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPostsFromServer();
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
  }

  ngOnChanges() {
    this.postsService.getPostsFromServer();
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
