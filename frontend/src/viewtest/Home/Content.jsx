import React, {useState, useEffect} from 'react';
import './css/base.css';
import './css/content.css';
import { BsShieldCheck} from "react-icons/bs";
import { FaLocationDot, FaStar, FaCarRear} from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { FaGoogle, FaFacebook} from "react-icons/fa6";

function Content() {
  const [cars, setCars] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [price, setPrice] = useState('');
  const [numberCar, setNumberCar] = useState('');
  const [location, setLocation] = useState('');
  useEffect(() => {
    axios.get('http://localhost:5000/get-car')
      .then((response) => {
        const carsData = response.data.cars; 
        setCars(carsData); 
      })
      .catch((error) => {
        console.error('Lỗi:', error);
      });
  }, []);

  return (
    <div className='content'>
      <h1 className='content__text'>Xe dành cho bạn</h1>
      <div className='content__list'>
      {cars.map((car, index) => (
         <Link to={`/product/${car._id}`} className='content__list-child' key={index}>
          <nav>
            <img src={car.imagePath} className='content__list-child-img'></img>
            <div className='btn__freetax content__list-child-img-tax '>
              <p className='content__list-child-img-tax-text'>
                Miễn thế chấp
              </p>
            </div>
            <div className='content__list-child-img-flash btn__electronic'>
              <p className='content__list-child-img-flash-text'>
                Đặt xe nhanh
              </p>
            </div>
          </nav>
          <div className='content__list-child-auto'>
            <div className='content__list-child-auto-car btn__auto'> 
              <p className='content__list-child-auto-car-text'> Số tự động</p>
            </div>
            <div className='content__list-child-auto-location'></div>
          </div>
          <div className='content__list-child-name'>
            <h1 className='content__list-child-name-main'>{car.title}</h1>
            <i><BsShieldCheck></BsShieldCheck></i>
          </div>
          <div className='content__list-child-location'>
            <i><FaLocationDot></FaLocationDot></i>
            <p className='content__list-child-location-text'>{car.location}</p>
          </div>
          <div className='content__list-child-underlined'> </div>
          <div className='content__list-child-detail'>
            <div className='content__list-child-detail-evaluate'>
              <div className='content__list-child-detail-evaluate-star'>
                 <i><FaStar></FaStar></i>
                <p className='content__list-child-detail-evaluate-star-text'>5.0</p>
              </div>
              <div className='content__list-child-detail-evaluate-usage'>
                <i><FaCarRear></FaCarRear></i>
                <p className='content__list-child-detail-evaluate-usage-text'>75 chuyến</p>
              </div>
            </div>
            <div className='content__list-child-detail-buy'>
                <span className='content__list-child-detail-buy-sale'>
                  {car.price}vnđ
                </span>
                <p className='content__list-child-detail-buy-day'>
                  <span>Giá tổng</span> {car.price}vnđ
                </p>
            </div>
          </div>


        </Link>
        ))}
        </div>
    </div>
  )
}

export default Content;
