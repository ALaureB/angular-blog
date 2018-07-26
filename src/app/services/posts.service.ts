import { Post } from '../models/Post.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor(private httpClient: HttpClient, private router: Router) {}

  getPostsFromServer() {
    this.httpClient
      .get<Post[]>('https://angular-blog-be5d1.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          this.posts = response;
          this.emitPostsSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  savePostsToServer() {
    this.httpClient
      .put('https://angular-blog-be5d1.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('Saving over !');
        },
        (error) => {
          console.log('Error ! : ' + error);
        }
      );
  }

  emitPostsSubject() {
    this.postsSubject.next(this.posts);
  }

  likePost(i: number) {
    this.posts[i].loveIts++;
    this.savePostsToServer();
    this.emitPostsSubject();
  }

  unlikePost(i: number) {
    this.posts[i].loveIts--;
    this.savePostsToServer();
    this.emitPostsSubject();
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.savePostsToServer();
    this.emitPostsSubject();
  }

  deletePost(i: number) {
    this.posts.splice(i, 1);
    this.savePostsToServer();
    this.emitPostsSubject();
  }

}
