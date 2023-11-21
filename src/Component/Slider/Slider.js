import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import { Test } from '../../Test';
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";


import "./Slider.scss"
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';

function Slider() {
  return (
    <Swiper   
    effect={'flip'}
    grabCursor={true}
    slidesPerView={1} 
    navigation={true}
    pagination={true}
    modules={[EffectFlip, Pagination, Navigation]} 
    className="mySwiper">

    {Test.map((data) => (
        <SwiperSlide key={data.id}>

        <div className='Test-card'>
        <div className='Test-profile'>
        <div className='Test-img'>
        <img src={data.Img}  alt="" /></div>
        <div className='Test-name'>
        <h3>{data.name}</h3>
        <p>{data.role}</p>

        </div>
        
        </div>
        <p className='Test-des'>{data.des}</p>
        
        </div>



        </SwiperSlide>
      ))}


       
      </Swiper>
   
  )
}

export default Slider

