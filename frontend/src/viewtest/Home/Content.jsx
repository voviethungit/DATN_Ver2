import React from 'react';
import './css/base.css';
import './css/content.css';
import { BsShieldCheck} from "react-icons/bs";
import { FaLocationDot, FaStar, FaCarRear} from "react-icons/fa6";
import { Link } from 'react-router-dom';
// import { FaGoogle, FaFacebook} from "react-icons/fa6";

function Content() {
  return (
    <div className='content'>
      <h1 className='content__text'>Xe dành cho bạn</h1>
      <div className='content__list'>
        {/* 1 chú bé đần */}
        <Link to="/product" className='content__list-child'>
          <nav>
            <img src='https://danviet.mediacdn.vn/296231569849192448/2022/3/22/chay-gan-1500km-vinfast-lux-a20-da-rao-ban-voi-gia-ngo-ngang-danvietvn-3-1647927660921853695388.jpg' className='content__list-child-img'></img>
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
            <h1 className='content__list-child-name-main'>VINFAST LUX SA 2.0 2021</h1>
            <i><BsShieldCheck></BsShieldCheck></i>
          </div>
          <div className='content__list-child-location'>
            <i><FaLocationDot></FaLocationDot></i>
            <p className='content__list-child-location-text'>Quận 7, Hồ Chí Minh</p>
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
                  800K
                </span>
                <p className='content__list-child-detail-buy-day'>
                  <span>Giá tổng</span> 1800k
                </p>
            </div>
          </div>


        </Link>
         {/* 1 chú bé đần */}
         <div className='content__list-child'>
          <nav>
            <img src='https://danviet.mediacdn.vn/296231569849192448/2022/3/22/chay-gan-1500km-vinfast-lux-a20-da-rao-ban-voi-gia-ngo-ngang-danvietvn-3-1647927660921853695388.jpg' className='content__list-child-img'></img>
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
            <h1 className='content__list-child-name-main'>VINFAST LUX SA 2.0 2021</h1>
            <i><BsShieldCheck></BsShieldCheck></i>
          </div>
          <div className='content__list-child-location'>
            <i><FaLocationDot></FaLocationDot></i>
            <p className='content__list-child-location-text'>Quận 7, Hồ Chí Minh</p>
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
                  800K
                </span>
                <p className='content__list-child-detail-buy-day'>
                  <span>Giá tổng</span> 1800k
                </p>
            </div>
          </div>
        </div>
         {/* 1 chú bé đần */}
         <div className='content__list-child'>
          <nav>
            <img src='https://danviet.mediacdn.vn/296231569849192448/2022/3/22/chay-gan-1500km-vinfast-lux-a20-da-rao-ban-voi-gia-ngo-ngang-danvietvn-3-1647927660921853695388.jpg' className='content__list-child-img'></img>
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
            <h1 className='content__list-child-name-main'>VINFAST LUX SA 2.0 2021</h1>
            <i><BsShieldCheck></BsShieldCheck></i>
          </div>
          <div className='content__list-child-location'>
            <i><FaLocationDot></FaLocationDot></i>
            <p className='content__list-child-location-text'>Quận 7, Hồ Chí Minh</p>
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
                  800K
                </span>
                <p className='content__list-child-detail-buy-day'>
                  <span>Giá tổng</span> 1800k
                </p>
            </div>
          </div>
        </div>
         {/* 1 chú bé đần */}
         <div className='content__list-child'>
          <nav>
            <img src='https://danviet.mediacdn.vn/296231569849192448/2022/3/22/chay-gan-1500km-vinfast-lux-a20-da-rao-ban-voi-gia-ngo-ngang-danvietvn-3-1647927660921853695388.jpg' className='content__list-child-img'></img>
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
            <h1 className='content__list-child-name-main'>VINFAST LUX SA 2.0 2021</h1>
            <i><BsShieldCheck></BsShieldCheck></i>
          </div>
          <div className='content__list-child-location'>
            <i><FaLocationDot></FaLocationDot></i>
            <p className='content__list-child-location-text'>Quận 7, Hồ Chí Minh</p>
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
                  800K
                </span>
                <p className='content__list-child-detail-buy-day'>
                  <span>Giá tổng</span> 1800k
                </p>
            </div>
          </div>
        </div>
         {/* 1 chú bé đần */}
         <div className='content__list-child'>
          <nav>
            <img src='https://danviet.mediacdn.vn/296231569849192448/2022/3/22/chay-gan-1500km-vinfast-lux-a20-da-rao-ban-voi-gia-ngo-ngang-danvietvn-3-1647927660921853695388.jpg' className='content__list-child-img'></img>
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
            <h1 className='content__list-child-name-main'>VINFAST LUX SA 2.0 2021</h1>
            <i><BsShieldCheck></BsShieldCheck></i>
          </div>
          <div className='content__list-child-location'>
            <i><FaLocationDot></FaLocationDot></i>
            <p className='content__list-child-location-text'>Quận 7, Hồ Chí Minh</p>
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
                  800K
                </span>
                <p className='content__list-child-detail-buy-day'>
                  <span>Giá tổng</span> 1800k
                </p>
            </div>
          </div>
        </div>
         {/* 1 chú bé đần */}
         <div className='content__list-child'>
          <nav>
            <img src='https://danviet.mediacdn.vn/296231569849192448/2022/3/22/chay-gan-1500km-vinfast-lux-a20-da-rao-ban-voi-gia-ngo-ngang-danvietvn-3-1647927660921853695388.jpg' className='content__list-child-img'></img>
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
            <h1 className='content__list-child-name-main'>VINFAST LUX SA 2.0 2021</h1>
            <i><BsShieldCheck></BsShieldCheck></i>
          </div>
          <div className='content__list-child-location'>
            <i><FaLocationDot></FaLocationDot></i>
            <p className='content__list-child-location-text'>Quận 7, Hồ Chí Minh</p>
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
                  800K
                </span>
                <p className='content__list-child-detail-buy-day'>
                  <span>Giá tổng</span> 1800k
                </p>
            </div>
          </div>


        </div>
         {/* 1 chú bé đần */}
         <div className='content__list-child'>
          <nav>
            <img src='https://danviet.mediacdn.vn/296231569849192448/2022/3/22/chay-gan-1500km-vinfast-lux-a20-da-rao-ban-voi-gia-ngo-ngang-danvietvn-3-1647927660921853695388.jpg' className='content__list-child-img'></img>
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
            <h1 className='content__list-child-name-main'>VINFAST LUX SA 2.0 2021</h1>
            <i><BsShieldCheck></BsShieldCheck></i>
          </div>
          <div className='content__list-child-location'>
            <i><FaLocationDot></FaLocationDot></i>
            <p className='content__list-child-location-text'>Quận 7, Hồ Chí Minh</p>
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
                  800K
                </span>
                <p className='content__list-child-detail-buy-day'>
                  <span>Giá tổng</span> 1800k
                </p>
            </div>
          </div>


        </div>
       
       </div>
    </div>
  )
}

export default Content;
