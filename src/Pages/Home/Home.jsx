import React from 'react';
import Slider from '../../Components/Slider/Slider';
import Client from '../../Components/Client/Client';

const Home = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Slider></Slider>
            <Client></Client>
        </div>
    );
};

export default Home;