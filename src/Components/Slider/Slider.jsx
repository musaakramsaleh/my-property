import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const Slider = () => {
    return (
        <div>
            <Swiper 
            navigation={true} 
            modules={[Navigation,Autoplay,Pagination]}
            pagination={{
                clickable:true
            }}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
                <SwiperSlide>
                <div className="z-0 relative rounded-xl  text-red-800 font-bold text-4xl p-96 bg-cover bg-center flex justify-center items-center" style={{backgroundImage: `url(bg-2.jpg)`}}>
                <div>
                <h1 className='z-20 relative max-w-[1/2]'>Experience</h1>
                </div>
                <div className='absolute rounded-xl top-0 left-0 right-0 bottom-0 content-none z-10 bg-slate-500 opacity-40'></div>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="z-0 rounded-xl  text-red-800 font-bold text-4xl p-96  bg-cover bg-center flex justify-center items-center" style={{backgroundImage: `url(bg-1.jpg)`}}>
                <h1 className='z-20 relative'>Slide 2</h1>
                <div className='absolute rounded-xl top-0 left-0 right-0 bottom-0 content-none z-10 bg-slate-500 opacity-20'></div>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="z-0 rounded-xl  text-red-800 font-bold text-4xl p-96  bg-cover bg-center flex justify-center items-center" style={{backgroundImage: `url(bg-3.jpg)`}}>
                <h1 className='z-20 relative'>Slide 3</h1>
                <div className='absolute rounded-xl top-0 left-0 right-0 bottom-0 content-none z-10 bg-slate-500 opacity-20'></div>
            </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;