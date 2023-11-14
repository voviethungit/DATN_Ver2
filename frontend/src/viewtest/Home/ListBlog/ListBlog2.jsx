import "./css/listblog.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const ListBlog2 = () => {
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
          src="https://n1-cstg.mioto.vn/g/2023/06/25/08/ZLW62WK.jpg"
          alt=""
        />
      </div>
      <div className="blog_detail_content">
        <div className="main_content">
          <div className="group-tag">
            <span className="info info-bg">Trải nghiệm</span>
          </div>
          <h2>Xe Ô Tô Điện - Sự Lựa Chọn Hoàn Hảo Cho Lái Mới</h2>
          <div className="contant">
            <p>
              Trong thời đại công nghệ phát triển nhanh chóng, xe ô tô điện đã
              trở thành xu hướng phổ biến và được đánh giá cao về tính bền vững
              và tiết kiệm năng lượng. Đối với những người mới bước chân vào thế
              giới lái xe, việc chọn một chiếc xe ô tô điện là một quyết định
              thông minh và hoàn hảo. Dưới đây là một số lý do tại sao xe ô tô
              điện là lựa chọn lý tưởng cho lái mới, giúp bạn có được cái nhìn
              tổng quan để đưa ra quyết định phù hợp với nhu cầu của mình.
            </p>

            <h3>An toàn đối với lái mới</h3>
            <p>
              Một trong những yếu tố quan trọng hàng đầu khi chọn xe ô tô cho
              lái mới là tính an toàn. Xe ô tô điện thường được trang bị nhiều
              công nghệ an toàn tiên tiến, bao gồm hệ thống phanh chống bó cứng
              ABS, hệ thống kiểm soát lực kéo và túi khí. Điều này giúp giảm
              thiểu nguy cơ tai nạn và bảo vệ tốt cho người lái cũng như hành
              khách. <br /> <br />
              Bên cạnh đó, các chiếc xe điện thường có trọng lượng phân bố tốt
              và trọng tâm thấp, giúp tăng tính ổn định và khả năng giữ thăng
              bằng trong quá trình lái xe. Các hệ thống hỗ trợ lái như cảnh báo
              lấn làn và cảnh báo điểm mù cũng giúp cho lái xe mới tự tin và an
              toàn hơn trên đường.
            </p>

            <h3 className="font-size2">Tiết kiệm chi phí vận hành</h3>

            <p>
              Một trong những ưu điểm nổi bật của xe ô tô điện là tiết kiệm chi
              phí vận hành so với xe động cơ đốt trong truyền thống. Xe điện
              không yêu cầu dầu diesel hoặc xăng, thay vào đó sử dụng điện năng,
              giúp giảm thiểu chi phí nhiên liệu. Thêm vào đó, nhiều nước cũng
              cung cấp ưu đãi thuế và hỗ trợ cho người sở hữu xe ô tô điện, giúp
              giảm nguy cơ quá tải tài chính cho lái xe mới. <br />
              <br />
              Ngoài ra, xe điện ít phụ thuộc vào các bộ phận cơ học phức tạp,
              giảm thiểu chi phí bảo dưỡng và sửa chữa. Điều này đặc biệt hữu
              ích cho lái mới, người thường chưa có nhiều kinh nghiệm trong việc
              duy trì và bảo trì ô tô.
            </p>

            <h3 className="font-size2">Bảo vệ môi trường</h3>
            <p>
              {" "}
              Xe ô tô điện được đánh giá cao về tính bền vững và bảo vệ môi
              trường. Với không khí ngày càng ô nhiễm và biến đổi khí hậu trở
              thành mối quan ngại hàng đầu, việc sử dụng xe điện là một cách
              đóng góp tích cực cho sự bảo vệ môi trường. <br />
              <br />
              Xe điện không sản sinh ra khí thải độc hại và CO2 như xe động cơ
              đốt trong, giúp giảm thiểu tác động tiêu cực đến không khí và môi
              trường. Điều này cũng góp phần hỗ trợ nỗ lực toàn cầu trong việc
              giảm phát thải khí nhà kính và gia tăng sử dụng nguồn năng lượng
              tái tạo.
            </p>

            <h3 className="font-size2">Thuê xe điện giá rẻ ở đâu?</h3>
            <p>
              Nếu bạn là một người yêu môi trường, là tín đồ của phương tiện
              xanh hoặc muốn trải nghiệm trước khi quyết định mua xe thì Mioto
              chính là ứng dụng cho thuê xe tự lái & có tài đáng để bạn cân
              nhắc. <br /> <br />
              <span className="color__mioto">Mioto </span> có đa dạng nhiều dòng
              xe, từ xe xăng, xe dầu hay xe điện, Mioto đều đáp ứng nhu cầu của
              bạn. Giá thuê xe điện tại Mioto chỉ từ 1000k/ngày, và đặc biệt khi{" "}
              <br /> <span className="color__mioto">Mioto</span> tung ưu đãi
              giảm 20% (tối đa 300k) khi bạn trải nghiệm xe điện tại ứng dụng.
              Ưu đãi được áp dụng đến hết ngày 31/07/2023.
            </p>
            <p>
              <img
                src="https://n1-cstg.mioto.vn/g/2023/06/25/08/ZLW62WK.jpg"
                alt=""
              />
            </p>
            <p>
              Xe ô tô điện là sự lựa chọn hoàn hảo cho lái mới với những ưu điểm
              vượt trội về môi trường, hiệu suất và tiết kiệm năng lượng. Ngoài
              ra, việc lái xe ô tô điện cũng đơn giản và dễ dàng hơn, giúp người
              lái tập trung vào việc hưởng thụ trải nghiệm lái xe thú vị và đóng
              góp tích cực đến bảo vệ môi trường. Mặc dù có một số thách thức
              cần đối mặt, nhưng với sự phát triển của công nghệ và quy mô sản
              xuất, xe ô tô điện có tiềm năng trở thành xu hướng chính trong
              tương lai và thúc đẩy sự chuyển đổi đến một tương lai giao thông
              bền vững và sạch hơn.
              <br />
              Hy vọng bài viết này sẽ giúp bạn có cái nhìn tổng quan hơn để đưa
              ra quyết định phù hợp với nhu cầu của mình.
            </p>
            <a href="#" className="color__mioto">
              Xem thêm Nên Lựa Chọn Xe Số Sàn Hay Số Tự Động, Kinh Nghiệm Dành
              Cho Lái Mới Hoặc Mua Xe Lần Đầu?
            </a>
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
                  src="https://n1-cstg.mioto.vn/g/2023/06/19/16/1M6Y1MV1.jpg"
                  alt=""
                />
              </div>
              <div className="slide__content">
                <h2>
                  Nên lựa chọn xe số sàn hay số tự động, kinh nghiệm dành cho
                  lái mới hoặc mua xe lần đầu?
                </h2>
                <p>
                  Khi tìm hiểu về mua một chiếc xe mới, một câu hỏi phổ biến khi
                  người mua thường gặp phải là liệu nên chọn xe số sàn hay số tự
                  động. Cũng như đối với lái mới, quyết định này có thể đáng
                  ngại và khó khăn. Dưới đây là một số ưu điểm và nhược điểm của
                  cả hai loại xe, giúp bạn có được cái nhìn tổng quan để đưa ra
                  quyết định phù hợp với nhu cầu của mình.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="slide-img">
                <img  className="edit__img"
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
                    kinh nghiệm quan trọng nhất cho tài mới khi lái xe ô tô.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide-content">
              <div className="slide-img">
                <img  className="edit__img"
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
                <img  className="edit__img"
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
                <img  className="edit__img"
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
          <SwiperSlide>
            {" "}
            <div className="slide-content">
              <div className="slide-img">
                <img  className="edit__img"
                  src="https://n1-cstg.mioto.vn/g/2023/07/10/10/MDURDEEP.jpg"
                  alt=""
                />
                <div className="slide__content">
                  <h2>DÒNG XE Ô TÔ PHÙ HỢP ĐỂ ĐI CẮM TRẠI</h2>
                  <p>
                    Đi cắm trại là hoạt động giải trí rất phổ biến và được nhiều
                    người yêu thích. Tuy nhiên, để tận hưởng hoàn toàn những
                    trải nghiệm đó, bạn cần phải chuẩn bị đầy đủ các trang thiết
                    bị và đồ dùng cần thiết. Và một trong những yếu tố quan
                    trọng không thể thiếu đó là chiếc xe phù hợp để đi cắm trại.
                    Trong bài viết này, chúng ta sẽ tìm hiểu về những dòng xe
                    phù hợp để đi cắm trại.
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

export default ListBlog2;
