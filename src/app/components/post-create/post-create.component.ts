import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { Post } from '../../models/post.model';
import { Location } from '@angular/common';


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

  // Array to store posts
  posts: Post[] = [];

  constructor(
    private errorHandler: ErrorHandlerService,
    private router: Router, private location: Location
  ) {}

  createPost() {
    // Generate a unique ID (you might want to use a more robust method in a real application)
    const newId = this.posts.length + 1;
    
    // Create a new post object with the generated ID
    const createdPost: Post = {
      ...this.newPost,
      id: newId
    };

    // Add the new post to the array
    this.posts.push(createdPost);

    console.log('Post created successfully', createdPost);
    console.log('Updated posts array', this.posts);

    // Reset the form
    this.newPost = {
      title: '',
      body: '',
      userId: 1
    };

    // Navigate to a hypothetical post detail page
    this.router.navigate(['/posts', newId]);


 
  }

  goBack() {
    this.location.back(); 
  }
}