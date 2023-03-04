import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import './Main.module.css'

const Main = () => {
    return (
        <main>
            <Navbar
                imagePath={'../../images/logo.png'}
                logoName={"Jason Dansie"}
               />
            <Outlet />  
            <Footer />

        </main>
    );
};

export default Main;