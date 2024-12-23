# Unhandled Promise Rejection in Next.js 15 Fetch Call

This repository demonstrates a common error in Next.js 15 applications where a `fetch` call within a page component is not properly handled, leading to unhandled promise rejections and unexpected behavior.

## Problem

The `pages/about.js` file contains a `fetch` call that retrieves data from an API endpoint.  If this `fetch` call fails (e.g., due to network issues or a server error), the promise will reject.  Without proper error handling, this rejection causes an error, often resulting in a blank page or a server-side error in production.

## Solution

The `pages/aboutSolution.js` file shows how to properly handle the promise rejection using `try...catch` and display a user-friendly message if the fetch fails.  Consider alternative error handling strategies for a robust user experience. 

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Observe the error if the fetch fails. (You can simulate a failure by altering the API endpoint or temporarily disconnecting your internet connection).
6. Compare the behaviour with the `/aboutSolution` page which handles the potential errors.