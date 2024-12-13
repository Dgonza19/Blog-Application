import React, { useState } from 'react'
import Blog from './components/Blog'
import PostList from './components/PostList'
import PostForm from './components/PostForm';
import './App.css';


function App() {

const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, {...newPost, id: posts.length + 1 }]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  }


  return (
    <div>
      <Blog />
      <PostList posts={posts} deletePost={deletePost}/>
      <PostForm addPost={addPost} />
    </div>
  )
}

export default App
