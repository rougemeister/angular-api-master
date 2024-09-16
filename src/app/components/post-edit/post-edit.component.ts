import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { Post } from '../../models/post.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  post: Post | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private errorHandler: ErrorHandlerService,
    private location: Location 
  ) {}

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.loadPost(+postId);
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

  updatePost() {
    if (this.post) {
      this.apiService.updatePost(this.post).subscribe({
        next: () => {
          console.log('Post updated successfully');
          this.router.navigate(['/posts', this.post?.id]);
        },
        error: (error) => this.errorHandler.handleError(error)
      });
    } else {
      this.errorHandler.handleError('Cannot update: Post is null');
    }
  }

  goBack() {
    this.location.back(); // Use location back to navigate to the previous page
  }
}


