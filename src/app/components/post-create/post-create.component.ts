// src/app/components/post-create/post-create.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  newPost: Post = {
    title: '',
    body: '',
    userId: 1 // You might want to get this from a user service or authentication
  };

  constructor(
    private apiService: ApiService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) {}

  createPost() {
    this.apiService.createPost(this.newPost).subscribe({
      next: (createdPost) => {
        console.log('Post created successfully', createdPost);
        this.router.navigate(['/posts', createdPost.id]);
      },
      error: (error) => this.errorHandler.handleError(error)
    });
  }
}

