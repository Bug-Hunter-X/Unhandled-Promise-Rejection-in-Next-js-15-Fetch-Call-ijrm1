```javascript
// pages/aboutSolution.js

export default async function AboutSolution() {
  let data = null;
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    data = { message: 'Failed to load data. Please try again later.' };
  }

  return (
    <div>
      <h1>About Page</h1>
      {data && data.message && <p>{data.message}</p>}
      {data && data.message && <p>{data.message}</p>}
    </div>
  );
}
```