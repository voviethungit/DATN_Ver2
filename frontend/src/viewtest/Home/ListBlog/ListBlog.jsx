import "./css/listblog.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const ListBlog = () => {
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
    <div className="blog__chill">
      <div className="blog_detail_main">
        <img
          src="https://n1-cstg.mioto.vn/g/2023/07/12/09/6L6M2ZNX.jpg"
          alt=""
        />
      </div>
      <div className="blog_detail_content">
        <div className="main_content">
          <div className="group-tag">
            <span className="info info-bg">Trải nghiệm</span>
          </div>
          <h2>
            Khám phá Hà Nội vào Lễ Quốc Khánh 2/9 bằng việc thuê xe tự lái
          </h2>
          <div className="contant">
            <p>
              Đối với những người yêu thích du lịch và khám phá, Lễ Quốc Khánh
              2/9 là cơ hội lý tưởng để trải nghiệm vẻ đẹp và văn hóa của Hà
              Nội. Cũng như còn điều gì tuyệt vời hơn khi lễ này cùng gia đình
              vi vu 36 phố phường Hà Nội, ngắm nhìn vẻ đẹp cổ kính đậm văn hoá
              người Việt. Thành phố này không chỉ có những di sản văn hóa lâu
              đời mà còn có cả những danh lam thắng cảnh tuyệt đẹp. Hãy để Mioto
              gợi ý cho bạn những địa điểm lý tưởng để bạn ghé thăm trong dịp Lễ
              2/9 này nhé!
            </p>

            <h2 className="font-size">
              Phương tiện di chuyển thuận lợi cho chuyến đi?
            </h2>

            <p>
              Dịp Lễ 2/9 nói riêng cũng như các dịp Lễ khác nói chung, việc lựa
              chọn một phương tiện di chuyển phù hợp và thuận tiện cho lịch
              trình cũng là việc đáng quan tâm. Việc di chuyển bằng xe tự lái
              giúp bạn tiết kiệm thời gian so với việc sử dụng phương tiện công
              cộng hoặc chờ đợi taxi. Khi bạn sở hữu chiếc xe tự lái, bạn sẽ có
              toàn quyền quyết định địa điểm và thời gian di chuyển.
            </p>

            <p className="font-size5">Những lưu ý khi thuê xe tự lái</p>

            <h3 className="font-size2">Kiểm tra xe kỹ</h3>

            <p>
              Trước khi xuất phát, hãy kiểm tra kỹ càng các yếu tố như lốp xe,
              dầu động cơ và nhiên liệu.
            </p>

            <h3 className="font-size2">Luôn tuân thủ luật giao thông</h3>
            <p>
              {" "}
              Hãy tuân thủ các quy tắc giao thông và luôn đảm bảo an toàn khi
              lái xe.
            </p>

            <h3 className="font-size2">Tìm hiểu địa chỉ</h3>
            <p>
              Trước khi bắt đầu hành trình, nên tìm hiểu địa chỉ và lộ trình,
              lên kế hoạch cho các địa điểm để tránh lạc đường.
            </p>

            <h3 className="font-size2">Sử dụng GPS</h3>
            <p>
              Sử dụng thiết bị GPS hoặc điện thoại thông minh để dễ dàng dẫn
              đường.
            </p>

            <h3 className="font-size2">Bảo hiểm xe hợp lệ</h3>
            <p>
              Trước khi thuê xe, hãy kiểm tra xem bảo hiểm xe có hiệu lực và đầy
              đủ không, để đảm bảo bạn sẽ không gặp rắc rối trong trường hợp xảy
              ra sự cố.
            </p>

            <h3 className="font-size2">Thuê xe từ nguồn đáng tin cậy</h3>
            <p>
              Lựa chọn đơn vị cho thuê xe có danh tiếng tốt và uy tín. Điều này
              giúp đảm bảo bạn nhận được dịch vụ chất lượng và xe trong tình
              trạng tốt.
            </p>

            <h3 className="font-size2">Chuẩn bị giấy tờ cần thiết</h3>
            <p>
              Đừng quên mang theo giấy phép lái xe hợp lệ và giấy tờ tùy thân
              khi thuê xe. Có thể bạn sẽ cần chúng trong quá trình di chuyển.
            </p>

            <h2 className="font-size">
              Địa điểm thú vị để khám phá vào Lễ 2/9
            </h2>

            <h3 className="font-size2">Tham quan các bảo tàng</h3>
            <p>
              Nếu bạn quan tâm đến lịch sử và văn hóa, có nhiều bảo tàng ở Hà
              Nội như Bảo tàng Dân tộc học, Bảo tàng Lịch sử Quốc gia, nơi bạn
              có thể hiểu rõ hơn về lịch sử và di sản của đất nước.
            </p>

            <h3 className="font-size2">Dạo chơi ở Hồ Tây</h3>
            <p>
              {" "}
              Nếu thời tiết thuận lợi, hãy đến Hồ Tây và thử các hoạt động như
              chèo thuyền kayak, tham gia cắm trại, hay đơn giản chỉ tận hưởng
              không gian yên bình bên bờ hồ.
            </p>

            <h3 className="font-size2">Hồ Hoàn Kiếm</h3>
            <p>
              Khởi đầu hành trình với một buổi sáng tại Hồ Hoàn Kiếm. Bạn có thể
              dạo chơi quanh hồ, tham quan Ngọc Sơn Temple và ngắm cây cầu Thê
              Húc.
            </p>
            <p>
              <img
                src="https://n1-cstg.mioto.vn/g/2023/07/12/09/6JRP8F3U.jpg"
                alt=""
              />
            </p>

            <h3>Phố cổ Hà Nội</h3>
            <p>
              Tiếp theo, hãy lái xe đến Phố cổ Hà Nội, nơi lưu giữ nhiều di sản
              văn hóa truyền thống. Hãy dừng lại để thử những món ăn ngon truyền
              thống và mua sắm những sản phẩm độc đáo.
            </p>
            <p>
              <img
                src="https://n1-cstg.mioto.vn/g/2023/07/12/09/6L6M2ZNX.jpg"
                alt=""
              />
            </p>

            <h3>Văn Miếu - Quốc Tử Giám</h3>
            <p>
              Một trung tâm văn hóa lịch sử của thành phố, nơi tôn vinh học vấn.
              Bạn có thể tìm hiểu về lịch sử và văn hóa thông qua các tượng đài
              và bảng thông tin tại đây.
            </p>

            <h3>Thử các món ăn địa phương</h3>
            <p>
              Hà Nội nổi tiếng với những món ăn độc đáo như phở, bún chả, chả cá
              Lã Vọng. Đừng bỏ lỡ cơ hội thử những món ăn tại các quán địa
              phương.
            </p>

            <h3>Khám phá văn hóa đêm</h3>
            <p>
              Nếu bạn ưa thích không gian văn hóa đêm, hãy tham gia các hoạt
              động như xem múa rối nước tại Nhà hát múa rối nước Thăng Long, hay
              dạo chơi tại khu phố cổ vào ban đêm để cảm nhận vẻ đẹp lãng mạn và
              đèn lồng lung linh.
            </p>
          </div>
        </div>
      </div>

      <div className="slide-container ">
        <h1>Bài Viết liên quan</h1>
        {/* Component Swiper */}
        <Swiper
          onSwiper={setSwiperInstance}
          slidesPerView={3}
          centeredSlides={false}
          spaceBetween={20}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {/* Các Slide */}

          <SwiperSlide>
            <div className="slide-content ">
              <div className="slide-img ">
                <img  className="edit__img"
                  src="https://n1-cstg.mioto.vn/g/2023/07/10/00/CVEJCQII.jpg"
                  alt=""
                />
              </div>
              <div className="slide__content">
                <h2>
                  Thuê Xe Ô Tô Tự Lái tại Hà Nội: Sự Thuận Tiện Trong Việc Khám
                  Phá Thủ Đô Hà Nội
                </h2>
                <p>
                  Việc thuê xe ô tô tự lái đang trở thành một lựa chọn phổ biến
                  cho những ai muốn khám phá Hà Nội một cách tự do và tiện lợi.
                  Không chỉ giúp bạn thoải mái di chuyển theo ý muốn mà còn mang
                  đến những trải nghiệm độc đáo và thú vị trong chuyến hành
                  trình của mình. Cùng Mioto tìm hiểu dịch vụ này và những lợi
                  ích mà khi thuê xe tự lái mang lại nhé.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="slide-img">
                <img className="edit__img"
                  src="https://n1-cstg.mioto.vn/g/2023/06/25/08/ZLW62WK.jpg"
                  alt=""
                />
                <div className="slide__content">
                  <h2>Xe Ô tô Điện - Sự Lựa Chọn Hoàn Hảo Cho Lái Mới</h2>
                  <p>
                    Trong thời đại công nghệ phát triển nhanh chóng, xe ô tô
                    điện đã trở thành xu hướng phổ biến và được đánh giá cao về
                    tính bền vững và tiết kiệm năng lượng. Đối với những người
                    mới bước chân vào thế giới lái xe, việc chọn một chiếc xe ô
                    tô điện là một quyết định thông minh và hoàn hảo. Dưới đây
                    là một số lý do tại sao xe ô tô điện là lựa chọn lý tưởng
                    cho lái mới, giúp bạn có được cái nhìn tổng quan để đưa ra
                    quyết định phù hợp với nhu cầu của mình. Từ khi ô tô trở
                    thành phương tiện giao thông thông dụng, việc sở hữu bằng
                    lái xe ô tô đã trở thành một kỹ năng quan trọng đối với
                    nhiều người. Tuy nhiên, việc lái xe ô tô không chỉ đơn giản
                    là ngồi vào ghế lái và lái đi. Đối với những tài xế mới, có
                    một số kinh nghiệm quan trọng cần được lưu ý để đảm bảo an
                    toàn và tránh những rủi ro trong quá trình lái xe. Trong bài
                    viết này, hãy cùng Mioto tìm hiểu về những kinh nghiệm quan
                    trọng nhất cho tài mới khi lái xe ô tô.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide-content">
              <div className="slide-img">
                <img className="edit__img"
                  src="https://n1-cstg.mioto.vn/g/2023/06/19/16/1M6Y1MV1.jpg"
                  alt=""
                />
                <div className="slide__content">
                  <h2>
                    Nên lựa chọn xe số sàn hay số tự động, kinh nghiệm dành cho
                    lái mới hoặc mua xe lần đầu?
                  </h2>
                  <p>
                    Khi tìm hiểu về mua một chiếc xe mới, một câu hỏi phổ biến
                    khi người mua thường gặp phải là liệu nên chọn xe số sàn hay
                    số tự động. Cũng như đối với lái mới, quyết định này có thể
                    đáng ngại và khó khăn. Dưới đây là một số ưu điểm và nhược
                    điểm của cả hai loại xe, giúp bạn có được cái nhìn tổng quan
                    để đưa ra quyết định phù hợp với nhu cầu của mình.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide-content">
              <div className="slide-img">
                <img className="edit__img"
                  src="https://n1-cstg.mioto.vn/g/2023/06/13/00/3GWTMTCU.jpg"
                  alt=""
                />
                <div className="slide__content">
                  <h2>
                    Thuê Xe Ô Tô Tự Lái ở Tân Bình: Sự Lựa Chọn Thông Minh Cho
                    Chuyến Đi Hoàn Hảo
                  </h2>
                  <p>
                    Khi bạn có kế hoạch du lịch hoặc cần di chuyển trong khu vực
                    thành phố Hồ Chí Minh, một trong những giải pháp tiện lợi và
                    linh hoạt nhất là thuê xe ô tô tự lái. Đặc biệt, ở khu vực
                    Tân Bình, một điểm nổi bật mà Mioto cung cấp dịch vụ thuê xe
                    ô tô tự lái chất lượng và đáng tin cậy. Và khi thuê xe chúng
                    ta có những lợi ích gì? Cùng Mioto khám phá lợi ích của việc
                    thuê xe ô tô tự lái ở Tân Bình và đưa ra một số gợi ý để bạn
                    có một chuyến đi hoàn hảo.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide-content">
              <div className="slide-img">
                <img className="edit__img"
                  src="https://n1-cstg.mioto.vn/g/2023/06/03/09/G9DYPJS5.jpg"
                  alt=""
                />
                <div className="slide__content">
                  <h2>
                    Tự do khám phá thành phố khi thuê xe ô tô tự lái tại Quận
                    Bình Thạnh
                  </h2>
                  <p>
                    Quận Bình Thạnh, nằm ở trung tâm Thành phố Hồ Chí Minh,
                    không chỉ là một trong những quận phát triển nhanh nhất, mà
                    còn là một điểm đến hấp dẫn với nhiều điểm du lịch, trung
                    tâm mua sắm và những quán ăn nổi tiếng. Để tận hưởng một
                    chuyến đi tuyệt vời đến quận Bình Thạnh, dịch vụ thuê xe ô
                    tô tự lái là lựa chọn tuyệt vời để bạn có thể thoải mái khám
                    phá và tận hưởng mọi góc cạnh của quận này.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide-content">
              <div className="slide-img">
                <img className="edit__img"
                  src="https://n1-tstg.mioto.vn/g/2023/05/05/09/TSY54_MLt_laQvdwDGk3fQ.jpg"
                  alt=""
                />
                <div className="slide__content">
                  <h2>
                    Thuê Xe Ô Tô Tự Lái tại Hà Nội: Sự Thuận Tiện Trong Việc
                    Khám Phá Thủ Đô Hà Nội
                  </h2>
                  <p>
                    Việc thuê xe ô tô tự lái đang trở thành một lựa chọn phổ
                    biến cho những ai muốn khám phá Hà Nội một cách tự do và
                    tiện lợi. Không chỉ giúp bạn thoải mái di chuyển theo ý muốn
                    mà còn mang đến những trải nghiệm độc đáo và thú vị trong
                    chuyến hành trình của mình. Cùng Mioto tìm hiểu dịch vụ này
                    và những lợi ích mà khi thuê xe tự lái mang lại nhé.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ListBlog;
