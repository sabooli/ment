import React, { useRef, useCallback, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import R8c from "../icons/Rectangle 8c.svg";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";

export default function Coach({bgImage}) {
  const [artCoaches, setArtCoaches] = useState([]);
  const { t, i18n } = useTranslation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [artCoaches]);

  if (!artCoaches) {
    return null;
  }

  const artUrl = t("artUrl");

  useEffect(() => {
    fetch(artUrl)
      .then((response) => response.json())
      .then((data) => setArtCoaches(data.data));
  }, [artUrl]);

  useEffect(() => {
    setArtCoaches([]);
    fetch(artUrl)
      .then((response) => response.json())
      .then((data) => setArtCoaches(data.data));
  }, [i18n.language]);

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
      className=""
      key={key}
      style={{
        position: "relative",
        paddingTop: "1%",
        paddingBottom: "2%",
        paddingInline: "25px",
      }}
    >
      <div className="buttonpose">
        {i18n.language === "fa" ? (
          <div>
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
          <div>
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
        spaceBetween={10}
        slidesPerView="auto"
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          820: {
            slidesPerView: 3,
          },
          1056: {
            slidesPerView: 4,
          },
          1470: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide className="me-5">
          <div className="needinstructor">
            <h3>{t("need an art coach")}</h3>
            <div>
              Lorem ipsum dolor sit amet consectetur. Urna posuere sed at
              fermentum nibh aliquet fusce. Justo gravida pharetra quam
              tincidunt nisl tellus rhoncus viverra amet. Sollicitudin sit lacus
              in eget arcu posuere. Vitae vitae mi pulvinar in. Erat egestas
              egestas interdum.
            </div>
          </div>
        </SwiperSlide>
        {artCoaches.map((artCoach) => (
          <SwiperSlide key={artCoach.id}>
            <div className="card coachsl swiper-slide mt-4">
              <div className="image-content">
                <div className="card-image-coach">
                  <img
                    src={`https://portals.mentalland.com/image/users/cons/degree/${artCoach.avatar}`}
                    alt="consultant"
                    className="dr"
                  />
                </div>
              </div>
              <div className="card-content-coach">
                <p className="coachname">
                  {artCoach.Fname}
                  {artCoach.Lname}
                </p>
                <Link to={`/pages/courseinfo/${artCoach.type_madrak}`} style={{textDecoration: "none"}}>
                  <p className="major">{artCoach.type_madrak}</p>
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
              <p className="major">Dance</p>
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
              <p className="major">Writing</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div
        style={{
          backgroundImage: `url("${bgImage}")`,
          backgroundRepeat: "no-repeat",
          position: "absolute",
          backgroundSize: "cover",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 0,
          opacity: 1,
        }}
      ></div>
    </div>
  );
}
