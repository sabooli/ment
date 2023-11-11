import React, { useRef, useCallback, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import neuro from "../icons/R328.png";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { useTranslation } from "react-i18next";

export default function Medicalservice({ heading, services }) {
 const [key, setKey] = useState(0);
 const {i18n} = useTranslation();

 useEffect(() => {
   setKey((prevKey) => prevKey + 1);
 }, [services]);

 if (!services) {
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
    <div className="coachback mb-5" key={key}>
      <div className="yyy">
        <h1 className="careH text-start">{heading}</h1>
        {i18n.language === "fa" ? (
          <div style={{ whiteSpace: "nowrap" }}>
            <IoIosArrowDroprightCircle
              className="swiper-navigation__prev"
              onClick={handlePrev}
            />
            <IoIosArrowDropleftCircle
              className="swiper-navigation__next"
              onClick={handleNext}
            />
          </div>
        ) : (
          <div style={{ whiteSpace: "nowrap" }}>
            <IoIosArrowDropleftCircle
              className="swiper-navigation__prev"
              onClick={handlePrev}
            />
            <IoIosArrowDroprightCircle
              className="swiper-navigation__next"
              onClick={handleNext}
            />
          </div>
        )}
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        ref={sliderRef}
        paginationpagination={{
          clickable: true,
        }}
        spaceBetween={15}
        slidesPerView={4}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          620: {
            slidesPerView: 3,
          },
          1056: {
            slidesPerView: 4,
          },
          1470: {
            slidesPerView: 5,
          },
        }}
      >
        {services &&
          services.map((service) => (
            <SwiperSlide key={service.id}>
              <div>
                <figure>
                  <img
                    src={`https://portals.mentalland.com/image/treatments/${service.img}`}
                    alt={service.title}
                    className="drt"
                  />
                  <figcaption class="carecaption">{service.title}</figcaption>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        <SwiperSlide>
          <div>
            <figure>
              <img src={neuro} alt="Neurosurgery" className="drt" />
              <figcaption class="carecaption">Neurosurgery</figcaption>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <figure>
              <img src={neuro} alt="Neurosurgery" className="drt" />
              <figcaption class="carecaption">Neurosurgery</figcaption>
            </figure>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}