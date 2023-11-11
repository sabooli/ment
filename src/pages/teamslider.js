import React from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react/swiper-slide";
import SwiperCore, { Navigation, Pagination, Zoom } from "swiper";
import "swiper/modules/navigation/navigation";
import "swiper/modules/pagination/pagination";
import image2 from "../icons/Rectangle 9.png";


SwiperCore.use([Zoom, Navigation, Pagination]);

export default function Teamslider() {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        zoom={{ maxRatio: 5 }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Zoom]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <div className="teamphoto">
              <img
                src={image2}
                className="img-fluid"
                alt="one of the members of Mentalland team"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <div className="teamphoto">
              <img
                src={image2}
                className="img-fluid"
                alt="one of the members of Mentalland team"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <div className="teamphoto">
              <img
                src={image2}
                className="img-fluid"
                alt="one of the members of Mentalland team"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <div className="teamphoto">
              <img
                src={image2}
                className="img-fluid"
                alt="one of the members of Mentalland team"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <div className="teamphoto">
              <img
                src={image2}
                className="img-fluid"
                alt="one of the members of Mentalland team"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <div className="teamphoto">
              <img
                src={image2}
                className="img-fluid"
                alt="one of the members of Mentalland team"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <div className="teamphoto">
              <img
                src={image2}
                className="img-fluid"
                alt="one of the members of Mentalland team"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <div className="teamphoto">
              <img
                src={image2}
                className="img-fluid"
                alt="one of the members of Mentalland team"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <div className="teamphoto">
              <img
                src={image2}
                className="img-fluid"
                alt="one of the members of Mentalland team"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <div className="teamphoto">
              <img
                src={image2}
                className="img-fluid"
                alt="one of the members of Mentalland team"
              />
            </div>
          </div>
        </SwiperSlide>{" "}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>{" "}
      </Swiper>
    </div>
  );
}
