import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { Post } from '../../models/post.model';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterLink, PaginationComponent],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  currentPage = 1;
  pageSize = 10;
  totalPosts = 0;

  constructor(
    private apiService: ApiService,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.apiService.getPosts(this.currentPage, this.pageSize).subscribe({
      next: (posts) => {
        this.posts = posts;
        this.totalPosts = 100; // Assuming JSONPlaceholder has 100 posts
      },
      error: (error) => this.errorHandler.handleError(error)
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadPosts();
  }
}
