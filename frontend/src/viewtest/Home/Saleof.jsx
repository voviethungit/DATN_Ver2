// import React from 'react'
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import './css/saleof.css'

function Saleof() {
    const [swiperInstance, setSwiperInstance] = useState(null);

    // Khởi tạo số lượng slide đã thêm hoặc bớt
    let numberOfAppendedSlides = 6;
    let numberOfPrependedSlides = 1;
  
    // Hàm thêm 2 slide vào đầu
    const prependTwoSlides = () => {
      swiperInstance.prependSlide([
        `<div class="swiper-slide">Slide ${++numberOfPrependedSlides}</div>`,
        `<div class="swiper-slide">Slide ${++numberOfPrependedSlides}</div>`,
      ]);
    };
  
    // Hàm thêm 1 slide vào đầu
    const prependOneSlide = () => {
      swiperInstance.prependSlide(
        `<div class="swiper-slide">Slide ${++numberOfPrependedSlides}</div>`
      );
    };
  
    // Hàm thêm 1 slide vào cuối
    const appendOneSlide = () => {
      swiperInstance.appendSlide(
        `<div class="swiper-slide">Slide ${++numberOfAppendedSlides}</div>`
      );
    };
  
    // Hàm thêm 2 slide vào cuối
    const appendTwoSlides = () => {
      swiperInstance.appendSlide([
        `<div class="swiper-slide">Slide ${++numberOfAppendedSlides}</div>`,
        `<div class="swiper-slide">Slide ${++numberOfAppendedSlides}</div>`,
      ]);
    };
  return (
    <div className='saleof'>
         <div className="saleof-container ">
        {/* Component Swiper */}
        <Swiper
  onSwiper={setSwiperInstance}
  slidesPerView={3}
  centeredSlides={false}
  spaceBetween={10}
  navigation={true}
  // navigation={{
  //   prevEl: 'saleof-prev-button',
  //   nextEl: 'saleof-next-button',
  // }}
  modules={[Pagination, Navigation]}
  className="mySwiper"
>
          {/* Các Slide */}

          <SwiperSlide>
            <div className="saleof-content ">
              <div className="saleof-img ">
                <img
                  className="saleof__edit-img"
                  src="https://n1-cstg.mioto.vn/g/2023/09/02/10/Thue_xe_oto_tu_lai_tphcm.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="saleof-content ">
              <div className="saleof-img ">
                <img
                  className="saleof__edit-img"
                  src="https://n1-cstg.mioto.vn/g/2023/06/25/08/ZLW62WK.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
           <SwiperSlide>
            <div className="saleof-content ">
              <div className="saleof-img ">
                <img
                  className="saleof__edit-img"
                  src="https://n1-cstg.mioto.vn/g/2023/06/25/08/ZLW62WK.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide> 
          <SwiperSlide>
            <div className="saleof-content ">
              <div className="saleof-img ">
                <img
                  className="saleof__edit-img"
                  src="https://n1-cstg.mioto.vn/g/2023/06/25/08/ZLW62WK.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
           <SwiperSlide>
            <div className="saleof-content ">
              <div className="saleof-img ">
                <img
                  className="saleof__edit-img"
                  src="https://n1-cstg.mioto.vn/g/2023/06/25/08/ZLW62WK.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide> 
          <SwiperSlide>
            <div className="saleof-content ">
              <div className="saleof-img ">
                <img
                  className="saleof__edit-img"
                  src="https://n1-cstg.mioto.vn/g/2023/06/25/08/ZLW62WK.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
           <SwiperSlide>
            <div className="saleof-content ">
              <div className="saleof-img ">
                <img
                  className="saleof__edit-img"
                  src="https://n1-cstg.mioto.vn/g/2023/06/25/08/ZLW62WK.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
           <SwiperSlide>
            <div className="saleof-content ">
              <div className="saleof-img ">
                <img
                  className="saleof__edit-img"
                  src="https://n1-cstg.mioto.vn/g/2023/06/25/08/ZLW62WK.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  )
}

export default Saleof
