import React from 'react';

const Post = ({post}) => {
    const {id,title}=post
    return (
        <div className='design'>
        <h4>post id:{id}</h4>
        <p>title:{title}</p>

        </div>
    );
};

export default Post;