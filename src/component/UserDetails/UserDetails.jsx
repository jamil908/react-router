import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const {name,email,phone}=user
    return (
        <div>
            <h2>Details about user :{name}</h2>
            <p>email:{email}</p>
            <p>phone:{phone}</p>
        </div>
    );
};

export default UserDetails;