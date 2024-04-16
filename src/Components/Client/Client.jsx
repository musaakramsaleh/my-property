import React, { useEffect, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Client = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/client.json');
        const data = await res.json();
        setClients(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=''>
      <h2 className='text-black text-center text-4xl mt-4 font-bold border-b-2 border-orange-500 pb-4 mb-4'>See the review of our Clients</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={window.innerWidth > 768 ? 3 : 1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        loop={true}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="text-black text-2xl font-medium text-center">{client.name}</h2>
                <p className='text-center bg-[#990000] text-white'><span className='text-4xl font-bold'>"</span><br />{client.review}<br /><span className='text-4xl font-bold'>"</span></p>
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Client;
