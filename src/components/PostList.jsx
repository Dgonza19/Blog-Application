import React from 'react';

const PostList = ({posts, deletePost}) => {

    return (
        <div>
            <h2>Publicaciones</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        {post.image && (
                            <img 
                                src={URL.createObjectURL(post.image)} 
                                alt={post.title} 
                                style={{ width: '100px', height: '100px' }} 
                            />
                        )}
                        <button onClick={() => deletePost(post.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;