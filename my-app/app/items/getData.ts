export async function getMovieData(endpoint: any, queryParams = {}) {
    // Base URL for The Movie Database API
    const baseURL = 'https://api.themoviedb.org/3';
  
    // Authorization options with the bearer token
    const options = {
      method: 'GET', // The method is GET for all requests
      headers: {
        accept: 'application/json', // Accept JSON responses
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmMwYmIxNDViOGY0YjQ3MmIxZDAzNTgxNjhmNWY3YyIsInN1YiI6IjYwOWE5NjExMjc5MGJmMDAzYjI0YTNkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hQ1V6zyCpNb9P3iqgpJHbF9sI-eRrXFo6PIKfjRrdPs' // Use the provided bearer token
      }
    };
  
    // Determine the path based on the endpoint argument
    let path;
    switch(endpoint) {
      case 'movies':
        path = 'search/movie'; // Use the discover endpoint for movies
        break;
      case 'actors':
        path = 'search/person';
        break;
      case 'tv':
        path = 'search/tv';
        break;
  
        default:
        throw new Error(`Unknown endpoint: ${endpoint}`);
    }
  
    // Construct the full URL with the path and any additional query parameters
    let url = `${baseURL}/${path}?`;
  
 // Append additional query parameters to the URL, if any
for (const [key, value] of Object.entries(queryParams)) {
  if (value !== null && value !== undefined) { // Check if value is not null or undefined
    url += `&${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
  }
}
    // Make the GET request to the TMDb API using the options with the Authorization header
    const response = await fetch(url, options);
  
    // Check if the response is ok
    if (!response.ok) {
      throw new Error('Failed to fetch data from TMDb API');
    }
  
    // Parse and return the response as JSON
    return await response.json();
  }