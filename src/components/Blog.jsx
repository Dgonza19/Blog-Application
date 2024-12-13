import React from "react";

const Blog = () => {

    const deletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    };

    return(
        <div>
            <h1>Bienvenidos al Blog!</h1>
        </div>
    )
};

export default Blog;