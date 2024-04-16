import React from 'react';
import Slider from '../../Components/Slider/Slider';
import Client from '../../Components/Client/Client';
import useData from '../../Hooks/useData';
import SingleProperty from '../../Components/property/SingleProperty';

const Home = () => {
    const {property} = useData()
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Slider></Slider>
            <h2 className='text-black text-center text-4xl mt-4 font-bold border-b-2 pb-3 border-orange-500'>Our Properties</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-5 gap-6 mx-auto'>
            {
                property.map((proper,idx)=><SingleProperty key={idx} proper = {proper}></SingleProperty>)
            }
            </div>
            <Client></Client>
        </div>
    );
};

export default Home;