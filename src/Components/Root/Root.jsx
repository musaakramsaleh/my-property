import React, { useEffect } from 'react';
import Slider from '../Slider/Slider';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    const loc = useLocation()
    useEffect(()=>{
        if(loc.pathname === '/'){
            document.title == `myProperty - Home`
        }
        else{
            document.title = ` myProperty ${loc.pathname.replace('/','- ')}`
        }
    },[loc.pathname])
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;