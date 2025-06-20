import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]); // ✅ This defines setData

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await response.json();
        setData(jsonData); // ✅ Now this works because setData is defined
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post, index) => (
          <>
          <li key={index}>
  id: {post.id} <br /> userId: {post.userId} <br /> title: {post.title} <br />body: {post.body}
</li>

          {/* <li key={index}>{post.id }</li>
          <li key={index}>{post.title }</li>
          <li key={index}>{post.body }</li> */}
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
