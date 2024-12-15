# Next.js 15 Build Error: Unhandled Error in Page Component

This repository demonstrates a common error encountered in Next.js 15 applications: unhandled errors within page components causing build failures.  The `pages/about.js` file intentionally throws an error, resulting in a build-time error. The solution involves implementing proper error handling within the page component using error boundaries or other techniques.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run build`.

You should see a build error in your console.