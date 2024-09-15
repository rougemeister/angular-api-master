import { Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/create', component: PostCreateComponent },
  { path: 'posts/:id/edit', component: PostEditComponent },
  {
    path: 'posts/:id',
    loadComponent: () => import('./components/post-detail/post-detail.component')
      .then(m => m.PostDetailComponent)
  }
];