import React from "react";
import "./css/login.css";
import "./css/base.css"
import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data, "userLogin");
        window.localStorage.setItem("accessToken", data.accessToken);
        window.location.href = "http://localhost:3000";
      });
  }


  return (
    <form className="login-form-group" onSubmit={handleSubmit}>
    <div className="Login-container">
      <div className="login-content">
        <div className="login-header">
          <h2>Đăng nhập</h2>
        </div>
        <div className="login-body">
          <div className="login-input-body">
            <div className="login-line-form">
              <div className="custom-input-login">
                <div className="wrap-info-login">
                  <div className="title-status-login">
                    <p>Email</p>
                    <div className="desc"></div>
                  </div>
                </div>
                <div className="wrap-input-login">
                  <div className="wrap-text-login">
                    <input
                      type="email"
                      name="email"
                      placeholder="Nhập Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-line-form">
              <div className="custom-input-login">
                <div className="wrap-info-login">
                  <div className="title-status-login">
                    <p>Mật Khẩu</p>
                    <div className="desc"></div>
                  </div>
                </div>
                <div className="wrap-input-login">
                  <div className="wrap-text-login">
                    <input
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Nhập Mật Khẩu"
                      required
                      className="input-password"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-wrap-test">
              <p> Quên mật khẩu?</p>
            </div>
            <div className="wrap-btn-login">
              <button type="submit" className="">
               Đăng nhập
              </button>
            </div>
            <div className="register-now">
              <p>Bạn chưa là thành viên?  <Link to= "/register"> <span >Đăng kí ngay</span></Link> </p>
            </div>
            <div className="login-wrap-btn-icon">
              <div className="login-wrap-btn-icon__facebook">
                <span className="login-icon__face">
                  <FaFacebook />
                </span>
                <span>FaceBook</span>
              </div>

              <div className="login-wrap-btn-google">
                <span className="login-icon-Google">
                  <FaGoogle />
                </span>
                <span>Google</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
};

export default Login;
