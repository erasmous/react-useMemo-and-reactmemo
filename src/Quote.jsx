import React,{useEffect,useState} from 'react'

function Quote() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos/";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setPosts(json)
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);

  return (
    <div>
        <ul>
        {posts.map(post => (
            <li key={post.id}>{post.title}</li>
        ))}
        </ul>
    </div>
  )
}

export default Quote