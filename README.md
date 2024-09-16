# Angular API Master

## Project Overview

Angular API Master is a sophisticated Angular 17 application that demonstrates best practices in working with APIs, including data fetching, error handling, authentication, optimization, and environment configuration. This project serves as a comprehensive example of building a modern, efficient, and well-structured Angular application.

## Features

- **API Integration**: Seamless interaction with the JSONPlaceholder API (https://jsonplaceholder.typicode.com/)
- **CRUD Operations**: Full Create, Read, Update, and Delete functionality for posts
- **Error Handling**: Robust error management with user-friendly error messages
- **Authentication Simulation**: Mock authentication using HTTP interceptors
- **Pagination**: Efficient data loading with a reusable pagination component
- **Caching Mechanism**: Optimized performance with a simple yet effective caching system
- **Environment Configuration**: Support for multiple environments (development, staging, production)
- **Lazy Loading**: Improved application load time with lazy-loaded components
- **Standalone Components**: Utilization of Angular 17's standalone component architecture

## Prerequisites

- Node.js (v14.20.0 or later)
- npm (v6.14.0 or later)
- Angular CLI (v17.0.0 or later)

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/angular-api-master.git
   cd angular-api-master
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200/`

## Project Structure

```
angular-api-master/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── post-list/
│   │   │   ├── post-detail/
│   │   │   ├── post-create/
│   │   │   ├── post-edit/
│   │   │   └── pagination/
│   │   ├── services/
│   │   │   ├── api.service.ts
│   │   │   ├── error-handling.service.ts
│   │   │   └── cache.service.ts
│   │   ├── interceptors/
│   │   │   └── auth.interceptor.ts
│   │   ├── models/
│   │   │   ├── post.model.ts
│   │   │   └── comment.model.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── environments/
│   │   ├── environment.ts
│   │   ├── environment.staging.ts
│   │   └── environment.prod.ts
│   ├── index.html
│   └── main.ts
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Key Components

- **PostListComponent**: Displays a paginated list of posts
- **PostDetailComponent**: Shows detailed information about a single post and its comments
- **PostCreateComponent**: Provides a form to create new posts
- **PostEditComponent**: Allows editing of existing posts
- **PaginationComponent**: A reusable component for handling pagination

## Services

- **ApiService**: Manages all API interactions with JSONPlaceholder
- **ErrorHandlingService**: Centralizes error handling logic
- **CacheService**: Implements a simple caching mechanism for GET requests

## Interceptors

- **AuthInterceptor**: Adds a mock authentication token to all outgoing requests and logs HTTP activity

## Routing

Routing is configured in `app.routes.ts`, utilizing Angular 17's new routing approach with standalone components.

## Environment Configuration

The project includes configurations for three environments:
- Development (`environment.ts`)
- Staging (`environment.staging.ts`)
- Production (`environment.prod.ts`)

To build for different environments:
```
ng build                 # for development
ng build --configuration=staging
ng build --configuration=production
```

## Available npm Scripts

- `ng serve`: Start the development server
- `ng build`: Build the project
- `ng test`: Run unit tests
- `ng lint`: Lint the project
- `ng e2e`: Run end-to-end tests (Requires additional setup with Cypress or Protractor)

## Testing

The project includes unit tests for services and components. Run tests using:
```
ng test
```

## Best Practices Demonstrated

1. **Standalone Components**: Utilizing Angular 17's standalone component architecture for simplified module management.
2. **Lazy Loading**: Implementing lazy loading for the post detail component to improve initial load time.
3. **Service Abstraction**: Using services to abstract API calls and business logic from components.
4. **Strong Typing**: Employing TypeScript interfaces for robust type checking.
5. **Environment-specific Configuration**: Leveraging Angular's environment files for different deployment scenarios.
6. **HTTP Interceptors**: Demonstrating the use of interceptors for cross-cutting concerns like authentication and logging.
7. **Reactive Programming**: Utilizing RxJS for handling asynchronous operations and data streams.
8. **Error Handling**: Implementing a centralized error handling mechanism for better error management and user experience.

## Contributing

Contributions to the Angular API Master project are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- JSONPlaceholder for providing a free fake API for testing and prototyping
- Angular team for their continuous work on improving the framework

---

For any additional information or queries, please open an issue in the GitHub repository.