import React from 'react';
import Navber from '../Header/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;