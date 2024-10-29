import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../user/User';
import './Users.css'

const Users = () => {
    const users= useLoaderData()
    return (
        <div>
            <h3>users :{users.length}</h3>
            <p>this is me developer</p>
            <div className='users'>
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;