import React, { useEffect, useState } from 'react';
import useData from '../../Hooks/useData';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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

    console.log(single);
    
    return (
        <div className='max-w-[1440px] mx-auto mt-5'>
            <Swiper className="mySwiper">
        <SwiperSlide><img src={single.image} alt="" /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        
      </Swiper>
            <h2>{single.estate_title}</h2>
            <h2>{single.description}</h2>
        </div>
    );
};

export default PropertyDetails;
