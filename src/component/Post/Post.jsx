import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title}=post
    return (
        <div className='design'>
        <h4>post id:{id}</h4>
        <p>title:{title}</p>
        <Link to={`/post/${id}`}>Post details</Link>
        <Link to={`/post/${id}`}><button>show details</button></Link>

        </div>
    );
};

export default Post;