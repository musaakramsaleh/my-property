import React, { useEffect } from 'react';
import Slider from '../Slider/Slider';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet-async';

const Root = () => {
    return (
        <div className=''>
            <Helmet>
                <title>myProperty- Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;