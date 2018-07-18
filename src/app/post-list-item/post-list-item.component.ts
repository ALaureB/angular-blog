import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  onLike() {
    this.postLikes++;
    console.log(this.postLikes);
  }

  onUnlike() {
    this.postLikes--;
    console.log(this.postLikes);
  }

  ngOnInit() {
  }

}
