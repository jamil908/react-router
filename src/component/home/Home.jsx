import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

const Home = () => {
    return (
        <div>
            <h2>this is the home component</h2>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;