import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id,title,body}=post


    return (
        <div className='design w-2/5'>
        <p>post id :{id}</p>
        <p><small>title:{title}</small></p>
        <p><small>body:{body}</small></p>
        <Link to="/posts"><button>back post</button></Link>
            
        </div>
    );
};

export default PostDetails;