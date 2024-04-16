import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import "animate.css"
const SingleProperty = ({ proper }) => {
    const sealColor = proper.status === 'sale' ? 'blue' : 'red';
    console.log(proper);
    return (
        <div className='relative max-w-[380px] shadow-lg overflow-hidden rounded-xl animate__animated  animate__zoomIn animate__delay-2s'>
            <img className='w-full h-[250px] object-cover transform transition-transform duration-200 hover:scale-110' src={proper.image} alt="" />
            <div className={`absolute top-0 right-0 rounded-full bg-[#990000] font-bold text-white p-2 m-2`}>
                {proper.status === 'sale' ? 'FOR SALE' : 'FOR RENT'}
            </div>
            <div className="p-4">
                <h2 className='text-xl text-black font-semibold'>{proper.estate_title}</h2>
                <p>Property Type: {proper.property_type}</p>
                <p>For {proper.status}</p>
                {proper.status === 'sale' ? <p>${proper.price}</p> : <p>${proper.price}/month</p>}
                <p className='flex justify-start items-center'><CiLocationOn />{proper.location}</p>
                <button className='w-full p-2 mt-4 bg-[#990000] text-white rounded-xl font-semibold'>View More</button>
            </div>
        </div>
    );
};

export default SingleProperty;
