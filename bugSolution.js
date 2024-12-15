```javascript
// pages/about.js
import { ErrorBoundary } from 'next/error-boundary';

function MyErrorBoundary({ error }) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default function About() {
  // This will now be handled by the error boundary
  try {
    throw new Error('Intentional error');
  } catch (error) {
      return <ErrorBoundary FallbackComponent={MyErrorBoundary}><div>About Page</div></ErrorBoundary>
  }
}
```