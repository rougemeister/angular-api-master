import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { Router } from '@angular/router';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.scss'
})
export class PostCreateComponent {
  newPost: Post = { title: '', body: '', userId: 1 };

  constructor(
    private apiService: ApiService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) {}

  createPost() {
    this.apiService.createPost(this.newPost).subscribe({
      next: () => this.router.navigate(['/posts']),
      error: (error) => this.errorHandler.handleError(error)
    });
  }

}
