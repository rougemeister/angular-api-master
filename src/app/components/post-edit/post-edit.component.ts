import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-edit',
  standalone: true,
  imports: [],
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.scss'
})
export class PostEditComponent {
  post: Post | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.loadPost(+postId);
    }
  }

  loadPost(id: number) {
    this.apiService.getPost(id).subscribe({
      next: (post) => this.post = post,
      error: (error) => this.errorHandler.handleError(error)
    });
  }

  updatePost() {
    if (this.post) {
      this.apiService.updatePost(this.post).subscribe({
        next: () => this.router.navigate(['/posts', this.post?.id]),
        error: (error) => this.errorHandler.handleError(error)
      });
    }
  }

}
