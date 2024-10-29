import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name,id,phone,email}=user;
    const userStyke={
        border:'2px solid yellow',
        padding:'10px',
        borderRadius:'20px',
        margin:'10px'

    }
    return (
        <div style={userStyke}>
        <h2>name:{name}</h2>
            <p>phone:{phone}</p>
            <p>email:{email}</p>
            <Link to={`/user/${id}`}>show details</Link>
            <Link to={`/user/${id}`}><button>see details</button></Link>
        </div>
    );
};

export default User;