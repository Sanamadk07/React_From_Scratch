export async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Make sure this URL is correct
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}