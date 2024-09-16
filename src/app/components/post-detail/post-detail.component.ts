import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';  // Import Router
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
    private errorHandler: ErrorHandlerService,
    private router: Router  
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

  deletePost() {
    if (!this.post || typeof this.post.id !== 'number') {
      this.errorHandler.handleError('No valid post to delete');
      return;
    }

    this.apiService.deletePost(this.post.id).subscribe({
      next: () => {
        console.log('Post deleted successfully');
        this.router.navigate(['/posts']); 
      },
      error: (error) => this.errorHandler.handleError(error)
    });
  }
}
