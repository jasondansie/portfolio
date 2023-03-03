import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Main = () => {
    return (
        <div>
            <Navbar
                imagePath={'../../images/logo.png'}
                logoName={"Jason Dansie"}
               />
               <Outlet />  
        </div>
    );
};

export default Main;