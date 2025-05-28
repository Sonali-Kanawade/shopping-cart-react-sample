import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Products from './pages/Products';
import Cart from './pages/Cart';

// Import your page components
const Home = React.lazy(() => import('./pages/Home'));
// const About = React.lazy(() => import('./pages/About'));
const Root = React.lazy(() => import('./pages/Root'));

function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div role="alert" className="error-boundary">
      <h1>Something went wrong:</h1>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

// export const routes: RouteObject[] = [
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/about',
//     element: <About />,
//   },
// ]; 

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Root />
          </ErrorBoundary>
        ),  
        children: [
            {
                path: '/',
                element: (
                  <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Home />
                  </ErrorBoundary>
                ),
                index: true
            },
            {
                path: '/products/:category/:filter?',
                element: (
                  <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Products />
                  </ErrorBoundary>
                ),
            },
            {
                path: '/cart',
                element: (
                  <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Cart />
                  </ErrorBoundary>
                )
            }
        ]
    }
])



