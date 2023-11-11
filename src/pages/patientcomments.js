import React, { useRef, useCallback, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Zoom, Navigation, Pagination } from "swiper";
import { useTranslation } from "react-i18next";
import "swiper/modules/navigation/navigation";
import "swiper/modules/pagination/pagination";
import patienta from "../icons/Ellipse 5.svg";
import patientb from "../icons/patientb.svg";
import patientc from "../icons/Ellipse 5c.svg";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

SwiperCore.use([Zoom, Navigation, Pagination]);

export default function Patientcomments({heading, comments}) {
 const { i18n } = useTranslation();
 const [key, setKey] = useState(0);

 useEffect(() => {
   setKey((prevKey) => prevKey + 1);
 }, [comments]);

 if (!comments) {
   return null;
 }

   const sliderRef = useRef(null);
   const handlePrev = useCallback(() => {
     if (!sliderRef.current) return;
     sliderRef.current.swiper.slidePrev();
   }, []);

   const handleNext = useCallback(() => {
     if (!sliderRef.current) return;
     sliderRef.current.swiper.slideNext();
   }, []);
  return (
    <div key={key}>
      <h2 className="patientSay text-center">{heading}</h2>
      <Swiper
        ref={sliderRef}
        zoom={{ maxRatio: 2 }}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {comments.map((comment) => (
          <SwiperSlide key={comment.id}>
            <div className="swiper-zoom-container">
              <div className="cardp swiper-slide">
                <div className="image-content">
                  <div className="card-image-circle">
                    <img
                      src={`https://portals.mentalland.com/image/users/comments/${comment.img}`}
                      alt="patient comment"
                      className="card-img patient img-fluid"
                      loading="lazy"
                    />
                  </div>
                  <div className="patientName text-center">
                    {" "}
                    {comment.Fname_Lname}
                  </div>
                  <div className="date" style={{ whiteSpace: "nowrap" }}>
                    <span>{comment.date}</span>
                    <span>{comment.role}</span>
                  </div>
                </div>
                <div className="card-content">
                  <p className="comment text-center">{comment.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <div className="cardp swiper-slide">
              <div className="image-content">
                <div className="card-image">
                  <img
                    src={patientb}
                    alt="patient comment"
                    className="card-img patient"
                    loading="lazy"
                  />
                </div>
                <div className="patientName text-center">Benjamin Smith</div>
                <div className="date">
                  <span>October 9</span>
                  <span>Painting</span>
                </div>
              </div>
              <div className="card-content">
                <p className="comment text-center">
                  Lorem ipsum dolor sit amet consectetur. Neque nam sed a sit
                  cras laoreet sed. Non felis lacus.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <div className="cardp swiper-slide">
              <div className="image-content">
                <div className="card-image">
                  <img
                    src={patientc}
                    alt="patient comment"
                    className="card-img patient"
                    loading="lazy"
                  />
                </div>
                <div className="patientName text-center">Benjamin Smith</div>
                <div className="date">
                  <span>October 9</span>
                  <span>Acting</span>
                </div>
              </div>
              <div className="card-content">
                <p className="comment text-center">
                  Lorem ipsum dolor sit amet consectetur. Felis in pretium
                  ornare nunc facilisi tellus ornare massa. Posuere mauris cum
                  pellentesque.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <div className="cardp swiper-slide">
              <div className="image-content">
                <div className="card-image">
                  <img
                    src={patienta}
                    alt="patient comment"
                    className="card-img patient"
                    loading="lazy"
                  />
                </div>
                <div className="patientName text-center">Benjamin Smith</div>
                <div className="date">
                  <span>October 9</span>
                  <span>Music</span>
                </div>
              </div>
              <div className="card-content">
                <p className="comment text-center">
                  Lorem ipsum dolor sit amet consectetur. Scelerisque risus
                  nulla viverra orci tristique magna et. Sagittis enim ut
                  gravida sed volutpat est arcu vitae ....
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="text-center mt-5 swps">
        {i18n.language === "fa" ? (
          <div style={{ whiteSpace: "nowrap" }}>
            <IoIosArrowDroprightCircle
              className="swiper-navigation___prev"
              onClick={handlePrev}
            />
            <IoIosArrowDropleftCircle
              className="swiper-navigation___next"
              onClick={handleNext}
            />
          </div>
        ) : (
          <div style={{ whiteSpace: "nowrap" }}>
            <IoIosArrowDropleftCircle
              className="swiper-navigation___prev"
              onClick={handlePrev}
            />
            <IoIosArrowDroprightCircle
              className="swiper-navigation___next"
              onClick={handleNext}
            />
          </div>
        )}
      </div>
    </div>
  );
}