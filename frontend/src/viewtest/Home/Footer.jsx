import React from 'react';
import './css/footer.css';
import './css/base.css';
// import { Link } from 'react-router-dom';
import { FaFacebookF, FaTiktok, FaFacebookMessenger } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__dash'></div>
      <div className='footer__content'>
        <div className='footer__content-firt'>
          <a href="header">
          <img className='footer__content-firt-img' src='https://www.mioto.vn/static/media/logo-full.ea382559.png'></img>           
          </a>
          < div className='footer__column'>
          <div className='footer__content-firt-phone'>
            <h4 className='footer__content-firt-phone-number'>0948988426</h4>
            <p className='footer__content-firt-phone-text'>Tổng đài hỗ trợ 24/7</p>
          </div>
          <div className='footer__content-firt-email'>
            <h4 className='footer__content-firt-emai-name'>nguyennvpd06505@fpt.edu.vn</h4>
            <p className='footer__content-firt-email-text'>Gửi mail cho Mioto</p>
          </div>
          </div>
          <div className='footer__content-firt-icon'>
            <i><FaFacebookF></FaFacebookF></i>
            <i><FaTiktok></FaTiktok></i>
            <i><FaFacebookMessenger></FaFacebookMessenger></i>
          </div>
        </div>
        <ul className='footer__content-list'>
          <li className="footer__content-list-child">
            <h3 className="footer__content-list-child-name" > Chính sách</h3>
            <div className="footer__content-list-child-text">
              <p className="footer__content-list-child-text-text">Chính sách và quy định</p>
              <p className="footer__content-list-child-text-text">Quy chế hoạt động</p>
              <p className="footer__content-list-child-text-text">Bảo mật thông tin</p>
              <p className="footer__content-list-child-text-text">Giải quyết tranh chấp</p>
            </div>
          </li>
          <li className="footer__content-list-child">
            <h3 className="footer__content-list-child-name">Tìm hiểu thêm</h3>
            <div className="footer__content-list-child-text">
              <p className="footer__content-list-child-text-text">Hướng dẫn chung</p>
              <p className="footer__content-list-child-text-text">Hướng dẫn đặt xe</p>
              <p className="footer__content-list-child-text-text">Hướng dẫn thanh toán</p>
              <p className="footer__content-list-child-text-text">Hỏi và trả lời</p>
            </div>
          </li>
          <li className="footer__content-list-child footer__content-list-child-name-none">
            <h3 className="footer__content-list-child-name" ></h3>
            <div className="footer__content-list-child-text">
              <p className="footer__content-list-child-text-text">Về Mioto</p>
              <p className="footer__content-list-child-text-text">Mioto Blog</p>
              <p className="footer__content-list-child-text-text">Tuyển dụng</p>
            </div>
          </li>
          <li className="footer__content-list-child">
            <h3 className="footer__content-list-child-name" >Đối Tác</h3>
            <div className="footer__content-list-child-text">
              <p className="footer__content-list-child-text-text">Đăng ký chủ xe Mioto</p>
              <p className="footer__content-list-child-text-text">Đăng ký GPS MITRACK 4G</p>
            </div>
          </li>
        </ul>
      </div>
      <div className='footer__dash'></div>
      <div className='footer__license'>
        <p className='footer__license-firt'>
        © Công ty Cổ Phần Mioto Asia
        </p>
        <ul className='footer__license-last'>
          <p className="footer__license-last-text">
            Số GCNĐKKD: 0317307544 </p>
          <p className="footer__license-last-text">
          Ngày cấp: 24-05-22 </p>
          <p className="footer__license-last-text">
            Nơi cấp: Sở Kế hoạch và Đầu tư TPHCM</p>
        </ul>
      </div>
      <div className='footer__dash'></div>
      <div className='footer__location'>
        <p className='footer__location-firt'>
        Địa chỉ: Văn phòng 02, Tầng 08, Tòa nhà Pearl Plaza, Số 561A Điện Biên Phủ, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam.
        </p>
        <ul className='footer__location-last'>
          <p className="footer__location-last-text">
          Tên TK: MB BANK NGUYEN VAN NGUYEN</p>
          <p className="footer__location-last-text">
          Số TK: 0948988426 </p>
          <p className="footer__location-last-text">
          Nơi cấp: Sở Kế hoạch và Đầu tư TPHCM</p>
        </ul>
      </div>
      <div className='footer__img'>
        <a href='http://online.gov.vn/Home/WebDetails/98465?AspxAutoDetectCookieSupport=1' className='footer__img-fist'>
          <img className='footer__img-firt-img' src='https://www.mioto.vn/static/media/bocongthuong.40599f29.png'></img>
        </a>
        <ul className='footer__img-last'>
          <p className="footer__img-last-text">
          Phương thức thanh toán</p>
          <div className="footer__img-last-icon">
             <img src="https://www.mioto.vn/static/media/vnpay.780689d6.png" className="footer__img-last-icon-img">
             </img>
             <img src="https://www.mioto.vn/static/media/vnpay.780689d6.png" className="footer__img-last-icon-img">
             </img>
             <img src="https://www.mioto.vn/static/media/vnpay.780689d6.png" className="footer__img-last-icon-img">
             </img>
             <img src="https://www.mioto.vn/static/media/vnpay.780689d6.png" className="footer__img-last-icon-img">
             </img>
          </div>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
