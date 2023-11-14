// import React from 'react';
import React, { useState } from 'react';
import './css/base.css';
import './css/sale.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const slides = [
    {
        id: 1,
        image: 'https://thienthanhlimo.com/wp-content/uploads/2022/05/101-anh-sieu-xe-4k-tai-free-lam-hinh-nen-dt-may-tinh-52.jpg',
        caption: 'Slide 1'
    },
    {
        id: 2,
        image: 'https://hoangvietauto.vn/wp-content/uploads/E1BAA2nh-siC3AAu-xe-Lamborghini.jpg',
        caption: 'Slide 2'
    },
    {
        id: 3,
        image: 'https://allimages.sgp1.digitaloceanspaces.com/tipeduvn/2022/08/1661793733_663_Hinh-nen-sieu-xe-Lamborghini-4k-dep-cuc-chat-cho.jpg',
        caption: 'Slide 3'
    },
    {
        id: 4,
        image: 'https://duhocchaudaiduong.edu.vn/hinh-nen-sieu-xe-lamborghini/imager_3762.jpg',
        caption: 'Slide 4'
    },
    {
        id: 5,
        image: 'https://giamcanherbalthin.com/hinh-nen-may-tinh-sieu-xe/imager_61_36473_700.jpg',
        caption: 'Slide 5'
    }
];


    function Sale() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className='sale'>
            <div className='sale__text'>
                <h1 className='sale__text-main'>
                    Chương Trình Khuyến Mãi
                </h1>
                <p className='sale__text-child'>
                    Nhận nhiều ưu đãi hấp dẫn từ Mioto
                </p>
            </div>
            <div className="sale__slideshow">
                <div className="sale__slideshow-container">
                    <div className="sale__slideshow-container-list">
                        <img className="sale__slideshow-container-list-img" src={slides[currentSlide].image} alt={slides[currentSlide].caption} />
                        <div className="sale__slideshow-container-list-slide">{slides[currentSlide].caption}</div>
                        <button className='sale__slideshow-container-firt' onClick={prevSlide}><i><FaAngleLeft></FaAngleLeft></i></button>
                        <button className='sale__slideshow-container-last' onClick={nextSlide}><i><FaAngleRight></FaAngleRight></i></button>
                    </div>
                    <div className="sale__slide-number">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`sale__slide-number-circle ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sale;
