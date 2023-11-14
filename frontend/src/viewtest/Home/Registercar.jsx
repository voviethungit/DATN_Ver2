import React from 'react';
import './css/base.css';
import './css/registercar.css';

function Registercar() {
    return (
        <div className='registercar'>
            <div className='registercar__container'>
                <div className='registercar__container-list'>
                    <h1 className='registercar__container-list-name'> Bạn muốn cho thuê xe ?</h1>
                    <p className='registercar__container-list-text'>Hơn 5,000 chủ xe đang cho thuê hiệu quả
                        trên Mioto Đăng kí trở thành đối tác của chúng tôi ngay hôm nay để gia tăng 
                        thu nhập hàng tháng.
                    </p>
                    <div className='registercar__container-list-button'>
                        <button className='registercar__container-list-button-firt btn__large'><p>Tìm hiểu ngay</p></button>
                        <button className='registercar__container-list-button-last btn__large'><p>Đăng ký xe</p></button>
                    </div>
                </div>
                <img className='registercar__container-img' src='https://www.mioto.vn/static/media/thue_xe_oto_tu_lai_di_du_lich_gia_re.fde3ac82.png' alt=''></img>
            </div>
        </div>
    )
}

export default Registercar
