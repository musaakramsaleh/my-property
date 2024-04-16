import React, { useEffect, useState } from 'react';
import useData from '../../Hooks/useData';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-cards';
import { Helmet } from 'react-helmet-async';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';
const PropertyDetails = () => {
    const [single, setSingle] = useState({});
    const { property } = useData();
    const { id } = useParams(); // Destructure the id parameter from useParams
    useEffect(() => {
        // Find the property with the matching id
        const foundProperty = property.find(item => item.id === id);
        if (foundProperty) {
            setSingle(foundProperty);
        }
    }, [property, id]);
     const hexa = property.filter(item=>item.id !== id)
     console.log(hexa)
    console.log(single);
    return (
        <div className='max-w-[1440px] mx-auto mt-5'>
            <Helmet><title>Property details- {id}</title></Helmet>
            <Swiper className="mySwiper"
            loop={true}
            >
        <SwiperSlide><img className='w-[900px] max-h-[500px]' src={single.image} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[900px] max-h-[500px]' src={single.image_2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[900px] max-h-[500px]' src={single.image_3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[900px] max-h-[500px]' src={single.image_4} alt="" /></SwiperSlide>
        
      </Swiper>
            <div className='grid md:grid-cols-3 grid-cols-1 items-top md:ml-2 md:text-left text-center'>
            <div className='col-span-2'>
                <div>
                <h2 className='text-[#990000] text-4xl font-bold mt-4 md:text-left text-center'>{single.estate_title}</h2>
            <h2 className='text-black font-semibold text-xl mt-2 md:text-left text-center'>{single.description}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2'>
            <h2 className='text-xl mt-2'>Property Type: {single.property_type}</h2>
            {single.status === 'sale' ? <p className='text-xl mt-2'>Price: ${single.price}</p> : <p className='text-xl mt-2'>Rent: ${single.price}/month</p>}
            <h2 className='text-xl '>Size: {single.area}</h2>
            </div>
            <h2 className='text-xl mt-2 text-black font-bold'>Facilities:</h2>
            <ul>
  {single.facilities && single.facilities.map((facility, index) => (
    <li className='text-xl ' key={index}>{facility}</li>
  ))}
</ul> 
                </div>
            </div> 
          <div>
          <h2 className='text-2xl font-bold text-black mb-2'>See other properties</h2>

<div className='mx-auto ml-10 md:ml-0 md:mr-2'>
<Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
        loop={true}
      >
{
     hexa.map((proper,idx)=><SwiperSlide><div className='bg-white border  w-[300px]' key={idx}>
     <img className='w-[300px] h-[250px]' src={proper.image} alt="" />
     <div className='p-2'>
     <p>{proper.estate_title}</p>
     <p>{proper.property_type}</p>
     {proper.status === 'sale' ? <p>Price: ${single.price}</p> : <p>Rent: ${proper.price}/month</p>}
     <Link to={`/PropertyDetails/${proper.id}`}><button className=' p-2 mt-4 bg-[#990000] text-white rounded-xl font-semibold'>View Property</button></Link>
     </div>
 </div></SwiperSlide>)
 }
</Swiper>
</div>
          </div>
            </div>
      
        </div>
    );
};

export default PropertyDetails;

        
      
        