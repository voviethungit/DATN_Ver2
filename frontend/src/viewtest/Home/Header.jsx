import React, { useState, useEffect } from 'react';
import './css/header.css';
import './css/base.css';
import { FaBell, FaAngleDown, FaBars, FaX } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fullName, setFullName] = useState('');
  const [imagePath, setImagePath] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      axios.get('http://localhost:5000/getProfile', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          setImagePath(response.data.user.imagePath);
          setFullName(response.data.user.fullName);
          setIsLoggedIn(true); // Đánh dấu đã đăng nhập thành công
        })
        .catch((error) => {
          console.error('Lỗi :', error);
        });
    }
  }, []);
  
  return (
    <div className='header'>
      <Link to="/" className='header__icon'>
        <img src='https://www.mioto.vn/static/media/logo-full.ea382559.png' className='header__icon-img'></img>
      </Link>
      <ul className='header__page'>
        <Link to="/about" className='header__page-item'>Về Mioto</Link>
        <li className='header__page-item'>Chuyến đi</li>
        <li className='header__page-item-vertical'></li>
        {/* Login repon */}
        <label htmlFor="nav-tablet-input" className="nav__bars-icon">
          <i className="header__page-item-login-iconbars">
            <FaBars></FaBars>
          </i>
        </label>
        <input hidden='none' type="checkbox" className="nav__input" id="nav-tablet-input"></input>
        <div id='nav__overlay' className='nav__overlay'>
        <label htmlFor='nav-tablet-input' id='close-overlay'>
          <i className='close-overlay-icon'><FaX></FaX></i>
        
        </label>
        {/* reponsive */}
        {/* <Link to="/user" className='header__page-item-login-overlay'>
          <div className='header__page-item-login-overlay-avt'> 
          <img src="https://n1-astg.mioto.vn/g/2023/08/19/18/BMEMGCxlBOgS_cMq-XfAnQ.jpg" alt=""></img>
          <h3 className='header__page-item-login-overlay-name'>Nguyễn Văn Nguyên</h3>
          </div>
          <Link to="/about" className='header__page-iten-login-overlay-about'> Về Mioto</Link>
          <div className='header__page-iten-login-overlay-go'> Let di go ?</div>
        </Link> */}
        </div>
        {/* Register repon */}
        {/* <label htmlFor='nav-tablet-register' className='nav__bars-icon-register'>
        <i className="header__page-item-register-iconbars">
            <FaBars></FaBars>
          </i>
        </label>
        <input hidden='none' type="checkbox" className="nav__register" id="nav-tablet-register">
        </input>
        <div id='nav__overlay' className='nav__overlay'>
        <label htmlFor='nav-tablet-register' id='close-overlay'>
          <i className='close-overlay-icon'><FaX></FaX></i> 
        </label>
        <div className='header__page-item-login-overlay'>
          <div className='header__page-item-login-overlay-avt'> 
          <img src="https://n1-astg.mioto.vn/g/2023/08/19/18/BMEMGCxlBOgS_cMq-XfAnQ.jpg" alt=""></img>
          <h3 className='header__page-item-login-overlay-name'>Nguyễn Văn Nguyên</h3>
          </div>
          <Link to="/about" className='header__page-iten-login-overlay-about'> Về Mioto</Link>
          <div className='header__page-iten-login-overlay-go'> Let di go ?</div>
        </div>
        </div> */}
        
        {/* đã login */}
        {isLoggedIn ? (
        // Nếu đã đăng nhập, hiển thị phần đã login
        <Link to="/user" className='header__page-item-login'>
          <i className='header__page-item-login-firt'><FaBell></FaBell></i>
          <div className='header__page-item-login-avt'>
            <img src={imagePath} alt="Avatar" />
          </div>
          <h3 className='header__page-item-login-name'>{fullName}</h3>
          <i className='header__page-item-login-last'><FaAngleDown></FaAngleDown></i>
        </Link>
      ) : (
        // Nếu chưa đăng nhập, hiển thị phần chưa login
        <div className='header__page-item-logout'>
          <Link to="/register" className='header__page-item-logout-register'>Đăng ký</Link>
          <Link to="/login" className='header__page-item-logout-register header__page-item-logout-register-button'>Đăng nhập</Link>
        </div>
      )}
      </ul>
    </div>
  )
}

export default Header;
