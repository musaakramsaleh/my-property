import React from 'react';
import { Link } from 'react-router-dom';
import { CiFacebook, CiInstagram, CiLocationOn, CiTwitter } from "react-icons/ci";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import useData from '../../Hooks/useData';
import "animate.css"
const Footer = () => {
    const {property} = useData()
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-14'>
            <div className='bg-black flex flex-col justify-center items-center text-center p-12'>
            <Link to='/' className="btn btn-ghost text-3xl font-bold text-white"><span className='text-yellow-300'>My</span>Property</Link>
            <p className='text-white max-w-[300px]'>Discover your dream home today. Explore listings, find your perfect space, and make your real estate dreams a reality</p>
            <div className='flex mt-4 text-3xl gap-3 text-white'>
            <CiMail className='rounded-full bg-slate-600' />
            <CiFacebook className='rounded-full bg-slate-600'></CiFacebook>
            <CiTwitter className='rounded-full bg-slate-600'></CiTwitter>
            <CiInstagram className='rounded-full bg-slate-600'></CiInstagram>
            </div>
            </div>
            <div className='bg-blue-950 p-12 grid grid-cols-1 md:grid-cols-2'>
            <div className='col-span-1'>
            <h2 className='text-white md:text-left text-center md:ml-4 mb-3 font-semibold text-2xl'>Get in touch</h2>
               <div className='flex md:justify-start items-center '>
               <CiLocationOn className='text-white text-2xl' />
               <span className='text-white ml-2'>3/2, leef street,Port city, Singapore</span>
               </div>
               <div className='flex justify-start items-center ml-2 mt-2 text-white '>
               <FaPhoneAlt />
               <span className='ml-2'>+84654564563465</span>
               </div>
               <div className='flex justify-start items-center ml-2 mt-2 text-xl text-white '>
               <CiMail />
               <span className='ml-2'>Bottle@glass.com</span>
               </div>
            </div>
            <div>
                <h2 className='text-white  mb-3 font-semibold text-2xl '>Property city</h2>
                <div className='grid grid-cols-2 text-slate-400'>
                    {
                        property.map(proper =><p className='mt-2 flex items-center gap-2'><FaLocationArrow className='text-white'></FaLocationArrow>{proper.location.split(',')[1]}</p>)
                    }
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;