import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: Date;
  @Input() postLikes: number;
  @Input() index: number;

  constructor(private postsService: PostsService) { }

  onLike() {
    this.postsService.likePost(this.index);
  }

  onUnlike() {
    this.postsService.unlikePost(this.index);
  }

  ngOnInit() {
  }

}
