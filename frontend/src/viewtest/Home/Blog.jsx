import React from 'react';
import './css/base.css';
import './css/blog.css';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <div className='blog'>
       <div className='blog__name'>
        <h1 className='blog__name-main'>MIOTO Blog</h1>
       </div>
       <div className='blog__content'>
         <div className='blog__content-firt'>
            <div className='blog__content-firt-firt'>
                <img className='blog__content-firt-firt-img' src="https://cloud.tienlenquyetthang.com/thumbnail/CATP-480-2019-7-29/a1_810_486_268.jpg" alt="" ></img>
                <Link to="/listblog" className='blog__content-firt-firt-text'>
                    <p className='blog__content-firt-firt-text-text'>12-08-2023</p>
                    <h3 className='blog__content-firt-firt-text-main'>Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH
                     2/9 bằng việc thuê xe
                    </h3>
                </Link>
            </div>
            <div className='blog__content-firt-last'>
            <img className='blog__content-firt-last-img' src="https://cloud.tienlenquyetthang.com/thumbnail/CATP-480-2019-7-29/a1_810_486_268.jpg" alt="" ></img>
                <Link to="/listblog1" className='blog__content-firt-last-text'>
                    <p className='blog__content-firt-last-text-text'>12-08-2023</p>
                    <h3 className='blog__content-firt-last-text-main'>Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH
                    2/9 bằng việc thuê xe
                    </h3>
                </Link>
            </div>
            {/* Slide 1 */}
            <div className='blog__content-firt-slide'>
            <img className='blog__content-firt-slide-img' src="https://cloud.tienlenquyetthang.com/thumbnail/CATP-480-2019-7-29/a1_810_486_268.jpg" alt="" ></img>
                <div className='blog__content-firt-slide-text'>
                    <p className='blog__content-firt-slide-text-text'>12-08-2023</p>
                    <h3 className='blog__content-firt-slide-text-main'>Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH
                    2/9 bằng việc thuê xe
                    </h3>
                </div>
            </div>
            {/* Slide 2 */}
            <div className='blog__content-firt-slide'>
            <img className='blog__content-firt-slide-img' src="https://cloud.tienlenquyetthang.com/thumbnail/CATP-480-2019-7-29/a1_810_486_268.jpg" alt="" ></img>
                <div className='blog__content-firt-slide-text'>
                    <p className='blog__content-firt-slide-text-text'>12-08-2023</p>
                    <h3 className='blog__content-firt-slide-text-main'>Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH
                    2/9 bằng việc thuê xe
                    </h3>
                </div>
            </div>
             {/* Slide 3 */}
             <div className='blog__content-firt-slide'>
            <img className='blog__content-firt-slide-img' src="https://cloud.tienlenquyetthang.com/thumbnail/CATP-480-2019-7-29/a1_810_486_268.jpg" alt="" ></img>
                <div className='blog__content-firt-slide-text'>
                    <p className='blog__content-firt-slide-text-text'>12-08-2023</p>
                    <h3 className='blog__content-firt-slide-text-main'>Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH
                    2/9 bằng việc thuê xe
                    </h3>
                </div>
            </div>
             {/* Slide 4 */}
             <div className='blog__content-firt-slide'>
            <img className='blog__content-firt-slide-img' src="https://cloud.tienlenquyetthang.com/thumbnail/CATP-480-2019-7-29/a1_810_486_268.jpg" alt="" ></img>
                <div className='blog__content-firt-slide-text'>
                    <p className='blog__content-firt-slide-text-text'>12-08-2023</p>
                    <h3 className='blog__content-firt-slide-text-main'>Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH
                    2/9 bằng việc thuê xe
                    </h3>
                </div>
            </div>

         </div>
         <div className='blog__content-last'>
         <img className='blog__content-last-img' src="https://cloud.tienlenquyetthang.com/thumbnail/CATP-480-2019-7-29/a1_810_486_268.jpg" alt="" ></img>
                <Link to='/listblog2' className='blog__content-last-text'>
                    <p className='blog__content-last-text-text'>12-08-2023</p>
                    <h3 className='blog__content-last-text-main'>Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH
                    2/9 bằng việc thuê xe
                    </h3>
                </Link>
         </div>
       </div>
    </div>
  )
}

export default Blog
