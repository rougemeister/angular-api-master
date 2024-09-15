import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer mock-token')
  });

  return next(authReq).pipe(
    tap({
      next: (event) => console.log('HTTP request:', req.url),
      error: (error) => console.error('HTTP error:', error),
      complete: () => console.log('HTTP request complete.')
    })
  );
};