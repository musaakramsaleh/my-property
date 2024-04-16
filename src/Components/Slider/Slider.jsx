import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const Slider = () => {
    return (
        <div className=''>
            <Swiper 
            navigation={true} 
            modules={[Navigation,Autoplay,Pagination]}
            pagination={{
                clickable:true
            }}
            loop={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
            >
                <SwiperSlide>
                <div className="  text-white font-bold text-4xl  bg-cover bg-center " style={{backgroundImage: `url(bg-2.jpg)`}}>
                <div className='p-72'>
                <h1 className='relative text-[50px] font-bold z-20'>Make your dream <br /><br />of having a <br /><br />home with <span className='text-red-700 bg-yellow-600 rounded-lg'>MyProperty</span></h1>
                
                </div>
                
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="relative  text-white font-bold text-4xl   bg-cover bg-center " style={{backgroundImage: `url(bg-1.jpg)`}}>
                <div className='p-72 '>
                <h1 className='relative z-20 text-[50px] font-bold'>See our Exclusive<br /><br />apartments to <br /><br />buy or rent property</h1>
                <div className='absolute top-0 left-0 right-0 bottom-0  content-none bg-black opacity-45 z-10'></div>
                </div>
              
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="relative z-0   text-white font-bold text-4xl   bg-cover bg-center " style={{backgroundImage: `url(bg-3.jpg)`}}>
                <div className='p-72 '>
                <h1 className='relative z-20 text-[50px] font-bold'>You can get your<br /><br /> property in suitable location<br /><br /> on a reasonable deal</h1>
                 <div className='absolute top-0 left-0 right-0 bottom-0  content-none bg-black opacity-45 z-10'></div>
                </div>
            </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;