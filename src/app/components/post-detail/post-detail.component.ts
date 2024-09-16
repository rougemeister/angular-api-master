// src/app/components/post-detail/post-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { Post } from '../../models/post.model';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post | null = null;
  comments: Comment[] = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.loadPost(+postId);
      this.loadComments(+postId);
    } else {
      this.errorHandler.handleError('Post ID not found in route parameters');
    }
  }

  loadPost(id: number) {
    this.apiService.getPost(id).subscribe({
      next: (post) => this.post = post,
      error: (error) => this.errorHandler.handleError(error)
    });
  }

  loadComments(postId: number) {
    this.apiService.getComments(postId).subscribe({
      next: (comments) => this.comments = comments,
      error: (error) => this.errorHandler.handleError(error)
    });
  }
}

