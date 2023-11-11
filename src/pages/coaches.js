import React, { useRef, useCallback, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
import R8c from "../icons/Rectangle 8c.svg";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";


export default function Coaches({ heading, color, major, coachData }) {
  const { t, i18n } = useTranslation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [coachData]);

  if (!coachData) {
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
    <div
      className="coachback mb-5"
      style={{ backgroundColor: color }}
      key={key}
    >
      <div className="yyy">
        <h1 className="coa text-start">{t(heading)}</h1>

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
          450: {
            slidesPerView: 3,
          },
          550: {
            slidesPerView: 4,
          },
          820: {
            slidesPerView: 5,
          },
          1056: {
            slidesPerView: 6,
          },
          1470: {
            slidesPerView: 7,
          },
        }}
      >
        {coachData.map((coach) => (
          <SwiperSlide key={coach.id}>
            <div className="card coachsl swiper-slide mt-4">
              <div className="image-content">
                <div className="card-image-coach">
                  <img
                    src={`https://portals.mentalland.com/image/users/cons/degree/${coach.avatar}`}
                    alt="consultant"
                    className="dr"
                  />
                </div>
              </div>
              <div className="card-content-coach">
                <p className="coachname">
                  Dr. {coach.Fname}
                  {coach.Lname}
                </p>
                <Link
                  to={`/pages/courseinfo/${coach.type_madrak}`}
                  className="ci"
                >
                  {" "}
                  <p className="major">{coach.type_madrak}</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="card coachsl swiper-slide mt-4">
            <div className="image-content">
              <div className="card-image-coach">
                <img src={R8c} alt="consultant" className="dr" />
              </div>
            </div>
            <div className="card-content-coach">
              <p className="coachname">Dr. Mary Green</p>
              <p className="major">{major}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card coachsl swiper-slide mt-4">
            <div className="image-content">
              <div className="card-image-coach">
                <img src={R8c} alt="consultant" className="dr" />
              </div>
            </div>
            <div className="card-content-coach">
              <p className="coachname">Dr. Mary Green</p>
              <p className="major">{major}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card coachsl swiper-slide mt-4">
            <div className="image-content">
              <div className="card-image-coach">
                <img src={R8c} alt="consultant" className="dr" />
              </div>
            </div>
            <div className="card-content-coach">
              <p className="coachname">Dr. Mary Green</p>
              <p className="major">{major}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card coachsl swiper-slide mt-4">
            <div className="image-content">
              <div className="card-image-coach">
                <img src={R8c} alt="consultant" className="dr" />
              </div>
            </div>
            <div className="card-content-coach">
              <p className="coachname">Dr. Mary Green</p>
              <p className="major">{major}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card coachsl swiper-slide mt-4">
            <div className="image-content">
              <div className="card-image-coach">
                <img src={R8c} alt="consultant" className="dr" />
              </div>
            </div>
            <div className="card-content-coach">
              <p className="coachname">Dr. Mary Green</p>
              <p className="major">{major}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card coachsl swiper-slide mt-4">
            <div className="image-content">
              <div className="card-image-coach">
                <img src={R8c} alt="consultant" className="dr" />
              </div>
            </div>
            <div className="card-content-coach">
              <p className="coachname">Dr. Mary Green</p>
              <p className="major">{major}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card coachsl swiper-slide mt-4">
            <div className="image-content">
              <div className="card-image-coach">
                <img src={R8c} alt="consultant" className="dr" />
              </div>
            </div>
            <div className="card-content-coach">
              <p className="coachname">Dr. Mary Green</p>
              <p className="major">Acting</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
