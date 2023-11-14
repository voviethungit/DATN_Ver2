import "./css/listblog.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const ListBlog1 = () => {
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
          src="https://n1-cstg.mioto.vn/g/2023/07/10/00/CVEJCQII.jpg"
          alt=""
        />
      </div>
      <div className="blog_detail_content">
        <div className="main_content">
          <div className="group-tag">
            <span className="info info-bg">Trải nghiệm</span>
          </div>
          <h2>
            Thuê Xe Ô Tô Tự Lái Tại Hà Nội: Sự Thuận Tiện Trong Việc Khám Phá
            Thủ Đô Hà Nội
          </h2>
          <div className="contant">
            <p>
              Việc thuê xe ô tô tự lái đang trở thành một lựa chọn phổ biến cho
              những ai muốn khám phá Hà Nội một cách tự do và tiện lợi. Không
              chỉ giúp bạn thoải mái di chuyển theo ý muốn mà còn mang đến những
              trải nghiệm độc đáo và thú vị trong chuyến hành trình của mình.
              Cùng Mioto tìm hiểu dịch vụ này và những lợi ích mà khi thuê xe tự
              lái mang lại nhé.
            </p>

            <h2 className="font-size">
              Tại sao nên thuê xe ô tô tự lái tại Hà Nội?
            </h2>
            <h3>Tự do di chuyển</h3>
            <p>
              Thuê xe tự lái cho phép bạn tự do di chuyển mà không bị ràng buộc
              bởi lịch trình của các phương tiện công cộng hay tour du lịch. Bạn
              có thể dừng lại bất cứ đâu và bất cứ lúc nào để thưởng thức phong
              cảnh, tham quan các điểm thú vị trên đường đi.
            </p>

            <h3 className="font-size2">Khám phá đa dạng</h3>

            <p>
              Hà Nội là một thành phố đa dạng với những con đường hấp dẫn, quận
              phố độc đáo và di sản văn hóa độc đáo. Bằng cách thuê xe tự lái,
              bạn có cơ hội khám phá những góc khuất và điểm đến ít người biết
              đến.
            </p>

            <h3 className="font-size2">Tiện lợi và linh hoạt</h3>
            <p>
              {" "}
              Việc sở hữu một chiếc xe cá nhân không phải lúc nào cũng tiện lợi.
              Thuê xe ô tô tự lái cho phép bạn sử dụng xe theo nhu cầu mà không
              phải lo lắng về bảo dưỡng, sửa chữa và các vấn đề khác.
            </p>

            <h3 className="font-size2">Thoải mái và riêng tư</h3>
            <p>
              Bạn có thể tận hưởng chuyến đi với gia đình hoặc bạn bè mà không
              bị gò ép của những người lạ trong cùng một nhóm tour. Riêng tư và
              thoải mái là điểm mạnh khi sử dụng dịch vụ thuê xe tự lái
            </p>

            <h3 className="font-size2">
              Tự do khám phá văn hóa và ẩm thực độc đáo
            </h3>
            <p>
              Hà Nội là một thành phố với văn hóa lâu đời và ẩm thực đa dạng.
              Khi bạn thuê xe ô tô tự lái, bạn có cơ hội khám phá những ngõ phố
              cổ kính, ngắm nhìn các kiến trúc cổ điển và thưởng thức những món
              ăn độc đáo tại các quán ẩm thực truyền thống. Việc tự mình lái xe
              giúp bạn tự do trong việc lựa chọn địa điểm và thời gian tham
              quan, mang đến trải nghiệm thú vị và độc đáo.
            </p>

            <h3 className="font-size2"> Tiết kiệm thời gian và chi phí</h3>
            <p>
              Trong môi trường đô thị như Hà Nội, việc di chuyển bằng xe ô tô tự
              lái cũng giúp bạn tiết kiệm thời gian và chi phí. Bạn không cần
              phải đợi chờ lâu để bắt xe buýt hoặc taxi, cũng như không phải chi
              trả các khoản phí vận chuyển riêng lẻ cho mỗi chuyến đi. Điều này
              đặc biệt quan trọng khi bạn có lịch trình bận rộn và muốn tận
              hưởng thời gian một cách hiệu quả.
            </p>

            <h3 className="font-size2">Lựa chọn dịch vụ uy tín khi thuê xe</h3>
            <p>
              Trước khi quyết định thuê xe, hãy tìm hiểu và chọn các dịch vụ uy
              tín, có đánh giá tích cực từ phía người dùng trước đó. Điều này
              giúp bạn tránh các rủi ro về chất lượng và dịch vụ.
            </p>

            <h3 className="font-size2">Chọn loại xe phù hợp</h3>
            <p>
              Dựa trên nhu cầu của bạn, lựa chọn loại xe ô tô phù hợp với số
              lượng người tham gia và mục đích của chuyến đi. Các dịch vụ thường
              cung cấp nhiều loại xe khác nhau để bạn lựa chọn.
            </p>

            <h2 className="font-size2">
              Kiểm tra hợp đồng và điều khoản khi thuê xe
            </h2>

            <p>
              Trước khi ký hợp đồng thuê, hãy đảm bảo bạn đã đọc kỹ các điều
              khoản và điều kiện, bao gồm giá cả, phí phạt, quy định bảo hiểm và
              khả năng nâng cấp, hủy bỏ.
            </p>

            <h3 className="font-size2">Kiểm tra trạng thái của xe</h3>
            <p>
              {" "}
              Nếu thời tiết thuận lợi, hãy đến Hồ Tây và thử các hoạt động như
              chèo thuyền kayak, tham gia cắm trại, hay đơn giản chỉ tận hưởng
              không gian yên bình bên bờ hồ.
            </p>

            <h3 className="font-size">
              Vậy khi thuê xe tại <span className="color__mioto"> Mioto </span>{" "}
              có ưu điểm gì?
            </h3>
            <h3 className="font-size2">Đa dạng trong từng dòng xe</h3>

            <p>
              <span className="color__mioto">Mioto</span> đa dạng từng dòng xe,
              từ phổ thông đến cao cấp, giúp bạn dễ dàng lựa chọn để phù hợp nhu
              cầu của mình. Từ những chiếc sedan thoải mái cho chuyến đi thành
              phố đến những chiếc SUV mạnh mẽ cho những cuộc hành trình chinh
              phục núi đồi, hay những chiếc xe mini gọn nhẹ nhưng động cơ không
              hề nhẹ, tất cả đều có sẵn để phục vụ nhu cầu của bạn.
            </p>
            <p>
              <img
                src="https://n1-cstg.mioto.vn/g/2023/07/10/00/C9JL7WB4.jpg"
                alt=""
              />
            </p>

            <h3>Giao xe tận nơi và giao tại sân bay</h3>
            <p>
              Một điều tiện lợi ở Mioto là bất kể ngày hay đêm, hoặc bạn cần
              giao trực tiếp tại sân bay khi đi công tác. Mioto cũng luôn sẵn
              sàng để giải quyết nhu cầu của bạn.
            </p>
            <h3 className="font-size2">
              Có kèo gấp <span className="color__mioto">Mioto </span>đều cân tất
            </h3>
            <p>
              Với tính năng Đặt xe nhanh, bạn thuận tiện hơn trong việc di
              chuyển mà không cần đợi xe quá nhiều thời gian làm ảnh hưởng lịch
              trình cũng như tiến độ của việc.
            </p>
            <p>
              <img
                src="https://n1-cstg.mioto.vn/g/2023/07/10/00/CVEJCQII.jpg"
                alt=""
              />
            </p>

            <h3>Thủ tục đơn giản và nhanh chóng</h3>
            <p>
              Bạn chỉ cần có CCCD gắn chip (Hoặc Passport) & Giấy phép lái xe là
              bạn đã đủ điều kiện thuê xe trên Mioto.
            </p>

            <h3>Thanh toán online dễ dàng</h3>
            <p>
              Đa dạng hình thức thanh toán: ATM, thẻ Visa & Ví điện tử (Momo,
              VnPay, ZaloPay), giúp bạn dễ dàng thanh toán online chỉ với thao
              tác vài phút trên ứng dụng Mioto.
            </p>

            <h3>Lái xe an toàn khi có bảo hiểm chuyến đi</h3>
            <p>
              Vững tay lái với gói bảo hiểm thuê xe từ nhà bảo hiểm MIC & VNI.
            </p>
            <p>
              <img
                src="https://n1-cstg.mioto.vn/g/2023/07/10/00/CGQCKPCB.jpg"
                alt=""
              />
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
                <img
                  className="edit__img"
                  src="https://n1-cstg.mioto.vn/g/2023/06/25/08/ZLW62WK.jpg"
                  alt=""
                />
              </div>
              <div className="slide__content">
                <h2>Xe Ô tô Điện - Sự Lựa Chọn Hoàn Hảo Cho Lái Mới</h2>
                <p>
                  Trong thời đại công nghệ phát triển nhanh chóng, xe ô tô điện
                  đã trở thành xu hướng phổ biến và được đánh giá cao về tính
                  bền vững và tiết kiệm năng lượng. Đối với những người mới bước
                  chân vào thế giới lái xe, việc chọn một chiếc xe ô tô điện là
                  một quyết định thông minh và hoàn hảo. Dưới đây là một số lý
                  do tại sao xe ô tô điện là lựa chọn lý tưởng cho lái mới, giúp
                  bạn có được cái nhìn tổng quan để đưa ra quyết định phù hợp
                  với nhu cầu của mình.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="slide-img">
                <img
                  className="edit__img"
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
                <img
                  className="edit__img"
                  src="https://n1-cstg.mioto.vn/g/2023/06/13/00/3GWTMTCU.jpg"
                  alt=""
                />
                <div className="slide__content">
                  <h2>
                    Kinh nghiệm lái xe ô tô cho tài mới: Hướng dẫn và lời khuyên
                    để lái xe an toàn
                  </h2>
                  <p>
                    Từ khi ô tô trở thành phương tiện giao thông thông dụng,
                    việc sở hữu bằng lái xe ô tô đã trở thành một kỹ năng quan
                    trọng đối với nhiều người. Tuy nhiên, việc lái xe ô tô không
                    chỉ đơn giản là ngồi vào ghế lái và lái đi. Đối với những
                    tài xế mới, có một số kinh nghiệm quan trọng cần được lưu ý
                    để đảm bảo an toàn và tránh những rủi ro trong quá trình lái
                    xe. Trong bài viết này, hãy cùng Mioto tìm hiểu về những
                    kinh nghiệm quan trọng nhất cho tài mới khi lái xe ô tô.{" "}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide-content">
              <div className="slide-img">
                <img
                  className="edit__img"
                  src="https://n1-cstg.mioto.vn/g/2023/06/03/09/G9DYPJS5.jpg"
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
                <img
                  className="edit__img"
                  src="https://n1-tstg.mioto.vn/g/2023/05/05/09/TSY54_MLt_laQvdwDGk3fQ.jpg"
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
                <img
                  className="edit__img"
                  src="https://n1-cstg.mioto.vn/g/2023/07/10/10/CI5ZYJ51.jpg"
                  alt=""
                />
                <div className="slide__content">
                  <h2>DU LỊCH 3 MIỀN CÙNG MIOTO</h2>
                  <p>
                    Việt Nam mảnh đất thân thương hình chữ S, với những cảnh sắc
                    thiên nhiên phong phú. Không chỉ vậy với bàn tay kiến tạo
                    của con người cũng đã góp phần tạo nên những công trình kiến
                    trúc độc đáo, và cảnh đẹp cũng có thể là những hình ảnh đời
                    thường của những con người giản dị chân chất mang đậm nét
                    truyền thống. Cùng Mioto du lịch 3 miền để chọn cho mình một
                    địa điểm cho dịp hè này thêm lý tưởng!
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

export default ListBlog1;
