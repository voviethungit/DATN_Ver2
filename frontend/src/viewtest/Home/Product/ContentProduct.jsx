import React from 'react';
import './css/contentproduct.css';
import './css/base.css';
import { FaImage, FaHeart, FaShareNodes, FaStar, FaFax, FaShield, FaQuestion, FaCalendarMinus, FaCircleCheck, FaCircleExclamation, FaFlag, FaChair, FaMendeley, FaChargingStation, FaBluetoothB, FaCamera, FaCameraRetro, FaBullseye, FaCarBurst, FaLocationCrosshairs, FaUsb, FaGlassWater, FaHandDots, FaIdCard, FaIdCardClip } from "react-icons/fa6";


function ContentProduct() {
    return (
        <div className='contentproduct'>
            <div className="contentproduct__img">
                <div className='contentproduct__img-main'>
                    <img src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/bmw_320i__2013/p/g/2023/02/24/16/4bBclsR0qNgp3ZoQRbmUBg.jpg'></img>
                </div>
                <div className="contentproduct__img-list">
                    <img src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/bmw_320i__2013/p/g/2023/02/24/16/FNoU4l7040O_BAPVzBAPEw.jpg" alt="" className="contentproduct__img-list-child" />
                    <img src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/bmw_320i__2013/p/g/2023/02/24/16/O-m7yef1dmvsYgorG3dpmA.jpg" alt="" className="contentproduct__img-list-child" />
                    <img src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/bmw_320i__2013/p/g/2023/02/24/16/IZK1xCtN5AvagRSuaq64kg.jpg" alt="" className="contentproduct__img-list-child" />
                </div>
                <div className='contentproduct__img-all'>
                    <i><FaImage></FaImage></i>
                    <p>Xem tất cả ảnh</p>
                </div>
            </div>
            <div className="contentproduct__detail">
                <div className='contentproduct__detail-container'>
                    <div className='contentproduct__detail-container-name'>
                        <div className='group-name'>
                            <h3>BMW 320i 2013</h3>
                            <div className='group-icon'>
                                <i><FaShareNodes></FaShareNodes></i>
                                <i><FaHeart></FaHeart></i>
                            </div>
                        </div>
                        <div className="group-total">
                            <div className='group-total-star'>
                                <i><FaStar></FaStar></i>
                                <span>5.0</span>
                            </div>
                            <div className='group-total-trip'>
                                <i><FaFax></FaFax></i>
                                <span>41 chuyến</span>
                            </div>
                            <div className='group-total-location'>
                                <span>Hòa Minh - Thanh Khê</span>
                            </div>
                        </div>
                        <div className='group-tag'>
                            <span className='group-tag-transmission tag-item'> Số tự động</span>
                            <span className='group-tag-delivery tag-item'> Giao xe tận nơi
                            </span>
                            <span className='group-tag-instant tag-item'>Đặt xe nhanh</span>
                        </div>
                    </div>
                    <div className='line-page'></div>
                    <div className='contentproduct__detail-sidebar-tablet'>
                    <div className='contentproduct__detail-sidebar-insurance'>
                        <i><FaShield></FaShield></i>
                        <div className='contentproduct__detail-sidebar-insurance-content'>
                            <h3>Bảo hiểm thuê xe MIC</h3>
                            <span>Xem chi tiết</span>
                        </div>
                    </div>
                    <div className='contentproduct__detail-sidebar-cardetail'>
                        <div className='price'>
                            <h4>999k/ngày</h4>
                        </div>
                        <div className='date-time-form'>
                            <div className='form-item'>
                                <label>Nhận xe</label>
                                <div className='wrap-date-time'>
                                    <div className='wrap-date'>
                                        <span className='value'>30/10/2023
                                        </span>
                                    </div>
                                    <div className='wrap-time'>
                                        <span className='value'>20:00
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='line'></div>
                            <div className='form-item'>
                                <label>Trả xe</label>
                                <div className='wrap-date-time'>
                                    <div className='wrap-date'>
                                        <span className='value'>31/10/2023
                                        </span>
                                    </div>
                                    <div className='wrap-time'>
                                        <span className='value'>22:00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='dropdown-form'>
                            <label>Địa điểm giao nhận xe</label>
                            <div className='wrap-form'>
                                <span className='value'>Hòa Minh - Liên Chiểu</span>
                            </div>
                        </div>
                        <div className='line-page'>
                        </div>
                        <div className='price-container'>
                            <div className='price-item'>
                                <p className='df-align-center'>
                                    Đơn giá thuê xe
                                    <span className='tooltip'>
                                        <i className='df-align-center-icon'> <FaQuestion></FaQuestion></i>
                                        <span className='df-align-center-tooltip-text'>
                                            Giá thuê xe được tính theo ngày, thời gian thuê ít hơn 24 tiếng sẽ được tính tròn 1 ngày <br />
                                            Giá thuê xe không bao gồm tiền xăng. Khi kết thúc chuyến đi, bạn vui lòng đổ xăng về lại mức ban đầu như khi nhận xe
                                        </span>
                                    </span>
                                </p>
                                <p className='cost'>
                                    <span>999 000đ/ ngày</span>
                                </p>
                            </div>
                            <div className='price-item'>
                                <p className='df-align-center'>
                                    Phí dịch vụ
                                    <span className='tooltip'>
                                        <i className='df-align-center-icon'> <FaQuestion></FaQuestion></i>
                                        <span className='df-align-center-tooltip-text'>
                                            Phí dịch vụ giúp chúng tôi duy trì và phát triển dịch vụ trên ưng dụng Mioto
                                        </span>
                                    </span>
                                </p>
                                <p className='cost'>
                                    <span>122 500đ/ ngày</span>
                                </p>
                            </div>
                            <div className='price-item'>
                                <p className='df-align-center'>
                                    Phí bảo hiểm
                                    <span className='tooltip'>
                                        <i className='df-align-center-icon'> <FaQuestion></FaQuestion></i>
                                        <span className='df-align-center-tooltip-text'>
                                            Chuyến đi của bạn được mua gói bảo hiểm vật chất xe ô tô. Trường hợp có sự cố ngoài ý muốn (trong phạm vi bảo hiểm), số tiền bạn thanh toán tối đa là 2.000.000 đồng/vụ (không bao gồm các trường hợp giảm trừ bồi thường theo quy tắc bảo hiểm)
                                        </span>
                                    </span>
                                </p>
                                <p className='cost'>
                                    <span>125 000đ/ ngày</span>
                                </p>
                            </div>
                            <div className='line-page'></div>
                            <div className='price-item'>
                                <p className='df-align-center'>
                                    Tổng phí thuê xe
                                </p>
                                <p className='cost'>
                                    <span>1 225 000đ * 1ngày</span>
                                </p>
                            </div>
                            <div className='promoion'>
                                <i className='promoion-icon'>
                                    <FaCalendarMinus></FaCalendarMinus>
                                </i>
                                <p className='promotion-text'>
                                    Sử dụng khuyến mãi
                                </p>
                            </div>
                            <div className='line-page'></div>
                            <div className='price-item price-content-total'>
                                <p className='df-align-center'>
                                    Tổng phí thuê xe
                                </p>
                                <p className='cost'>
                                    <span>1 225 000đ * 1ngày</span>
                                </p>
                            </div>
                            <button className='btn__large price-container-button'>
                                <i><FaCircleCheck></FaCircleCheck></i>
                                <h3>Chọn Thuê</h3>
                            </button>

                        </div>
                        <div className='surcharge'>
                            <p class="title text-primary">Phụ phí có thể phát sinh</p>
                            <div className='surcharge-container'>
                                <div className='surcharge-item'>
                                    <i><FaCircleExclamation></FaCircleExclamation></i>
                                    <div className='surcharge-item-content'>
                                        <div className='surcharge-item-content-item'>
                                            <p>Phí vượt giới hạn</p>
                                            <span>5.000đ/km</span>
                                        </div>
                                        <div className='surcharge-item-contnent-item'>
                                            <p>Phụ phí phát sinh khi lộ trình vượt quá 3000km khi thuê xe 1 ngày</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='surcharge-container'>
                                <div className='surcharge-item'>
                                    <i><FaCircleExclamation></FaCircleExclamation></i>
                                    <div className='surcharge-item-content'>
                                        <div className='surcharge-item-content-item'>
                                            <p>Phí quá giờ</p>
                                            <span>120.000đ/h</span>
                                        </div>
                                        <div className='surcharge-item-contnent-item'>
                                            <p>Phụ phí phát sinh nếu hoàn trả xe trễ giờ. Trường hợp trễ quá 5 tiếng, phụ phí thêm 1 ngày thuê</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='surcharge-container'>
                                <div className='surcharge-item'>
                                    <i><FaCircleExclamation></FaCircleExclamation></i>
                                    <div className='surcharge-item-content'>
                                        <div className='surcharge-item-content-item'>
                                            <p>Phí vệ sinh</p>
                                            <span>100 000đ</span>
                                        </div>
                                        <div className='surcharge-item-contnent-item'>
                                            <p>Phụ phí phát sinh khi xe hoàn trả không đảm bảo vệ sinh (nhiều vết bẩn, bùn cát, sình lầy...)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='report'>
                            <i><FaFlag></FaFlag></i>
                            <p>Báo cáo xe này</p>
                        </div>
                    </div>
                    </div>
                    <div className='contentproduct__detail-container-content'>
                        <div className='contentproduct__detail-container-content-info-cardesc'>
                            <h6> Đặc điểm</h6>
                            <div className='outstanding-features'>
                                <div className='outstanding-features-item'>
                                    <i><FaChair></FaChair></i>
                                    <div className='title'>
                                        <p className='sub'>Số ghế</p>
                                        <p className='main'>
                                            5 chỗ
                                        </p>
                                    </div>
                                </div>
                                <div className='outstanding-features-item'>
                                    <i><FaMendeley></FaMendeley></i>
                                    <div className='title'>
                                        <p className='sub'>Truyền động</p>
                                        <p className='main'>
                                            Số tự động
                                        </p>
                                    </div>
                                </div>
                                <div className='outstanding-features-item'>
                                    <i><FaChargingStation></FaChargingStation></i>
                                    <div className='title'>
                                        <p className='sub'>Nhiên liệu</p>
                                        <p className='main'>
                                            Xăng
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='line-page'></div>
                        <div className='contentproduct__detail-container-content-describe'>
                            <h6>Mô Tả</h6>
                            <p>Bmw màu hồng porsche xinh đẹp</p>
                        </div>
                        <div className='line-page'></div>
                        <div className='contentproduct__detail-container-content-convenient'>
                            <h6>Các tiện nghi khác</h6>
                            <div className='features-car'>
                                <ul>
                                    <li><i><FaBluetoothB></FaBluetoothB></i><span>Blutooth</span></li>
                                    <li><i><FaCamera></FaCamera></i><span>Camera hành trình</span></li>
                                    <li><i><FaCameraRetro></FaCameraRetro></i><span>Camera lùi</span></li>
                                    <li><i><FaBullseye></FaBullseye></i><span>Cảm biến lốp</span></li>
                                    <li><i><FaCarBurst></FaCarBurst></i><span>Cảm biến va chạm</span></li>
                                    <li><i><FaLocationCrosshairs></FaLocationCrosshairs></i><span>Định vị GPS</span></li>
                                    <li><i><FaUsb></FaUsb></i><span>Khe cắm USB</span></li>
                                    <li><i><FaGlassWater></FaGlassWater></i><span>ETC</span></li>
                                    <li><i><FaHandDots></FaHandDots></i><span>Túi khí an toàn</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className='line-page'></div>
                        <div className='contentproduct__detail-container-content-papers'>
                            <h6>Giấy tờ thuê xe</h6>
                            <div className='required-papers'>
                                <div className='required-papers-item'><i></i> <span>Chọn 1 trong 2 hình thức</span></div>
                                <div className='required-papers-item'><i><FaIdCard></FaIdCard></i> <span>GPLX & CCCD gắn chíp (đối chiếu)</span></div>
                                <div className='required-papers-item'><i><FaIdCardClip></FaIdCardClip></i> <span>GPLX (đối chiếu) & Passport(giữ lại)</span></div>
                            </div>
                        </div>
                        <div className='contentproduct__detail-container-content-mortgage'>
                            <h6>Tài sản thế chấp</h6>
                            <div className='required-papers'>
                                <p>15 triệu (tiền mặt/ chuyển khoản cho chủ xe khi nhận xe) hoặc Xe máy (kèm cà vẹt gốc) giá trị 15 triệu</p>
                            </div>
                        </div>
                        <div className='contentproduct__detail-container-content-rules'>
                            <h6>Điều khoản</h6>
                            <p className='hide'>
                                Quy định khác: <br />
                                ◦ Sử dụng xe đúng mục đích. <br />
                                ◦ Không sử dụng xe thuê vào mục đích phi pháp, trái pháp luật. <br />
                                ◦ Không sử dụng xe thuê để cầm cố, thế chấp. <br />
                                ◦ Không hút thuốc, nhả kẹo cao su, xả rác trong xe. <br />
                                ◦ Không chở hàng quốc cấm dễ cháy nổ. <br />
                                ◦ Không chở hoa quả, thực phẩm nặng mùi trong xe. <br />
                                ◦ Khi trả xe, nếu xe bẩn hoặc có mùi trong xe, khách hàng vui lòng vệ sinh xe sạch sẽ hoặc gửi phụ thu phí vệ sinh xe. <br />
                                Trân trọng cảm ơn, chúc quý khách hàng có những chuyến đi tuyệt vời !
                            </p>
                            <p className='read-more'>Xem thêm</p>
                        </div>
                        <div className='line-page'></div>
                        <div className='contentproduct__detail-container-content-evaluate'>
                        <div className='review'>
                            <i><FaStar></FaStar></i> 5.0  <span> 42 đánh giá</span>
                        </div>
                        <div className='list-reviews'>
                           <div className='list-reviews-item'>
                           <img className='list-reviews-item-img' src='https://n1-astg.mioto.vn/g/2023/09/18/09/n-Gwbx0s1s0QsObsceevXQ.jpg'>
                           </img>
                           <div className='list-reviews-item-name'>
                                <h6>Lại Văn Sỹ</h6>
                                <div className='list-reviews-item-name-star'>
                                <i><FaStar></FaStar></i> 
                                <i><FaStar></FaStar></i> 
                                <i><FaStar></FaStar></i> 
                                <i><FaStar></FaStar></i> 
                                <i><FaStar></FaStar></i> 
                                </div>

                           </div>
                            <p>23/10</p>
                           </div>
                           <div className='list-reviews-item'>
                           <img className='list-reviews-item-img' src='https://n1-astg.mioto.vn/g/2023/09/18/09/n-Gwbx0s1s0QsObsceevXQ.jpg'>
                           </img>
                           <div className='list-reviews-item-name'>
                                <h6>Lại Văn Sỹ</h6>
                                <div className='list-reviews-item-name-star'>
                                <i><FaStar></FaStar></i> 
                                <i><FaStar></FaStar></i> 
                                <i><FaStar></FaStar></i> 
                                <i><FaStar></FaStar></i> 
                                <i><FaStar></FaStar></i> 
                                </div>

                           </div>
                            <p>23/10</p>
                           </div>
                           {/* <div className='list-reviews-see-more'>
                             <span>Xem thêm</span>
                           </div> */}
                        </div>
                        </div>
                    </div>
                </div>
                <div className='contentproduct__detail-sidebar'>
                    <div className='contentproduct__detail-sidebar-insurance'>
                        <i><FaShield></FaShield></i>
                        <div className='contentproduct__detail-sidebar-insurance-content'>
                            <h3>Bảo hiểm thuê xe MIC</h3>
                            <span>Xem chi tiết</span>
                        </div>
                    </div>
                    <div className='contentproduct__detail-sidebar-cardetail'>
                        <div className='price'>
                            <h4>999k/ngày</h4>
                        </div>
                        <div className='date-time-form'>
                            <div className='form-item'>
                                <label>Nhận xe</label>
                                <div className='wrap-date-time'>
                                    <div className='wrap-date'>
                                        <span className='value'>30/10/2023
                                        </span>
                                    </div>
                                    <div className='wrap-time'>
                                        <span className='value'>20:00
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='line'></div>
                            <div className='form-item'>
                                <label>Trả xe</label>
                                <div className='wrap-date-time'>
                                    <div className='wrap-date'>
                                        <span className='value'>31/10/2023
                                        </span>
                                    </div>
                                    <div className='wrap-time'>
                                        <span className='value'>22:00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='dropdown-form'>
                            <label>Địa điểm giao nhận xe</label>
                            <div className='wrap-form'>
                                <span className='value'>Hòa Minh - Liên Chiểu</span>
                            </div>
                        </div>
                        <div className='line-page'>
                        </div>
                        <div className='price-container'>
                            <div className='price-item'>
                                <p className='df-align-center'>
                                    Đơn giá thuê xe
                                    <span className='tooltip'>
                                        <i className='df-align-center-icon'> <FaQuestion></FaQuestion></i>
                                        <span className='df-align-center-tooltip-text'>
                                            Giá thuê xe được tính theo ngày, thời gian thuê ít hơn 24 tiếng sẽ được tính tròn 1 ngày <br />
                                            Giá thuê xe không bao gồm tiền xăng. Khi kết thúc chuyến đi, bạn vui lòng đổ xăng về lại mức ban đầu như khi nhận xe
                                        </span>
                                    </span>
                                </p>
                                <p className='cost'>
                                    <span>999 000đ/ ngày</span>
                                </p>
                            </div>
                            <div className='price-item'>
                                <p className='df-align-center'>
                                    Phí dịch vụ
                                    <span className='tooltip'>
                                        <i className='df-align-center-icon'> <FaQuestion></FaQuestion></i>
                                        <span className='df-align-center-tooltip-text'>
                                            Phí dịch vụ giúp chúng tôi duy trì và phát triển dịch vụ trên ưng dụng Mioto
                                        </span>
                                    </span>
                                </p>
                                <p className='cost'>
                                    <span>122 500đ/ ngày</span>
                                </p>
                            </div>
                            <div className='price-item'>
                                <p className='df-align-center'>
                                    Phí bảo hiểm
                                    <span className='tooltip'>
                                        <i className='df-align-center-icon'> <FaQuestion></FaQuestion></i>
                                        <span className='df-align-center-tooltip-text'>
                                            Chuyến đi của bạn được mua gói bảo hiểm vật chất xe ô tô. Trường hợp có sự cố ngoài ý muốn (trong phạm vi bảo hiểm), số tiền bạn thanh toán tối đa là 2.000.000 đồng/vụ (không bao gồm các trường hợp giảm trừ bồi thường theo quy tắc bảo hiểm)
                                        </span>
                                    </span>
                                </p>
                                <p className='cost'>
                                    <span>125 000đ/ ngày</span>
                                </p>
                            </div>
                            <div className='line-page'></div>
                            <div className='price-item'>
                                <p className='df-align-center'>
                                    Tổng phí thuê xe
                                </p>
                                <p className='cost'>
                                    <span>1 225 000đ * 1ngày</span>
                                </p>
                            </div>
                            <div className='promoion'>
                                <i className='promoion-icon'>
                                    <FaCalendarMinus></FaCalendarMinus>
                                </i>
                                <p className='promotion-text'>
                                    Sử dụng khuyến mãi
                                </p>
                            </div>
                            <div className='line-page'></div>
                            <div className='price-item price-content-total'>
                                <p className='df-align-center'>
                                    Tổng phí thuê xe
                                </p>
                                <p className='cost'>
                                    <span>1 225 000đ * 1ngày</span>
                                </p>
                            </div>
                            <button className='btn__large price-container-button'>
                                <i><FaCircleCheck></FaCircleCheck></i>
                                <h3>Chọn Thuê</h3>
                            </button>

                        </div>
                        <div className='surcharge'>
                            <p class="title text-primary">Phụ phí có thể phát sinh</p>
                            <div className='surcharge-container'>
                                <div className='surcharge-item'>
                                    <i><FaCircleExclamation></FaCircleExclamation></i>
                                    <div className='surcharge-item-content'>
                                        <div className='surcharge-item-content-item'>
                                            <p>Phí vượt giới hạn</p>
                                            <span>5.000đ/km</span>
                                        </div>
                                        <div className='surcharge-item-contnent-item'>
                                            <p>Phụ phí phát sinh khi lộ trình vượt quá 3000km khi thuê xe 1 ngày</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='surcharge-container'>
                                <div className='surcharge-item'>
                                    <i><FaCircleExclamation></FaCircleExclamation></i>
                                    <div className='surcharge-item-content'>
                                        <div className='surcharge-item-content-item'>
                                            <p>Phí quá giờ</p>
                                            <span>120.000đ/h</span>
                                        </div>
                                        <div className='surcharge-item-contnent-item'>
                                            <p>Phụ phí phát sinh nếu hoàn trả xe trễ giờ. Trường hợp trễ quá 5 tiếng, phụ phí thêm 1 ngày thuê</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='surcharge-container'>
                                <div className='surcharge-item'>
                                    <i><FaCircleExclamation></FaCircleExclamation></i>
                                    <div className='surcharge-item-content'>
                                        <div className='surcharge-item-content-item'>
                                            <p>Phí vệ sinh</p>
                                            <span>100 000đ</span>
                                        </div>
                                        <div className='surcharge-item-contnent-item'>
                                            <p>Phụ phí phát sinh khi xe hoàn trả không đảm bảo vệ sinh (nhiều vết bẩn, bùn cát, sình lầy...)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='report'>
                            <i><FaFlag></FaFlag></i>
                            <p>Báo cáo xe này</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contentproduct__other'>
                <h2>Xe tương tự</h2>
            </div>
        </div>
    )
}

export default ContentProduct
