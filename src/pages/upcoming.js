import React, { useState, useEffect, useRef, useCallback } from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react/swiper-slide";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { useTranslation } from "react-i18next";
import "swiper/modules/navigation/navigation";
import "swiper/modules/pagination/pagination";
import slide2 from "../icons/Rectangle 242.svg";
import slide3 from "../icons/Rectangle 243.svg";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

SwiperCore.use([Navigation, Pagination]);

export default function Upcoming({ heading, color, eventData }) {
  const [displayAll, setDisplayAll] = useState(false);
  const {t, i18n} = useTranslation();
  const [key, setKey] = useState(0);

useEffect(() => {
    setKey((prevKey) => prevKey + 1);
}, [eventData]);

if (!eventData) {
  return null;
}
const handleClickSeeAll = () => {
  setDisplayAll(true);
};

const handleClickGoBack = () => {
  setDisplayAll(false);
};


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
    <div className="separate pb-5" style={{ backgroundColor: color }} key={key}>
      <div className="sepa">
        <div className="yyy">
          <h1 className="pubsem">{t(heading)}</h1>
          {displayAll ? (
            <div></div>
          ) : (
            <div>
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
          )}
        </div>
        {displayAll ? (
          <div className="displayAll">
            {eventData.map((event) => (
              <div>
                <div className="allinone" key={event.id}>
                  <div className="card swiper-slide">
                    <div className="image-content">
                      <div className="card-image">
                        <img
                          src={`https://portals.mentalland.com/image/events/${event.thumbnail_events}`}
                          alt="public seminar"
                          className="card-img"
                        />
                      </div>
                    </div>
                    <div className="card-content">
                      <p className="description">{event.title_event} </p>
                      <div className="properties">
                        <div className="colu pb-3">
                          <CgProfile className="svg" /> {event.teacher_events}
                        </div>
                        <div>Lorem Ipsum Dolor</div>
                        <div>
                          <MdOutlineCalendarMonth className="svg" />
                          {event.date_events}
                        </div>
                        <div>
                          <AiOutlineClockCircle className="svg" />{" "}
                          {event.time_events}
                        </div>
                      </div>
                    </div>
                    <Link
                      to={`/pages/seminarreg/${event.id}`}
                      className="click text-center"
                    >
                      {i18n.language === "fa" ? (
                        <HiArrowLongLeft className="arrow" />
                      ) : (
                        <HiArrowLongRight className="arrow" />
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center">
              <button onClick={handleClickGoBack} className="seeAll goBackLink">
                <span className="goBack">Go Back</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <Swiper
              ref={sliderRef}
              pagination={{
                clickable: true,
              }}
              spaceBetween={45}
              slidesPerView={3}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                550: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {eventData.map((event) => (
                <SwiperSlide key={event.id}>
                  <div className="card swiper-slide">
                    <div className="image-content">
                      <div className="card-image">
                        <img
                          src={`https://portals.mentalland.com/image/events/${event.thumbnail_events}`}
                          alt="public seminar"
                          className="card-img"
                        />
                      </div>
                    </div>
                    <div className="card-content">
                      <p className="description">{event.title_event} </p>
                      <div className="properties">
                        <div className="colu pb-3">
                          <CgProfile className="svg" /> {event.teacher_events}
                        </div>
                        <div>Lorem Ipsum Dolor</div>
                        <div>
                          <MdOutlineCalendarMonth className="svg" />
                          {event.date_events}
                        </div>
                        <div>
                          <AiOutlineClockCircle className="svg" />{" "}
                          {event.time_events}
                        </div>
                      </div>
                    </div>
                    <Link
                      to={`/pages/seminarreg/${event.id}`}
                      className="click text-center"
                    >
                      {i18n.language === "fa" ? (
                        <HiArrowLongLeft className="arrow" />
                      ) : (
                        <HiArrowLongRight className="arrow" />
                      )}{" "}
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
              <SwiperSlide>
                <div className="card swiper-slide">
                  <div className="image-content">
                    <div className="card-image">
                      <img
                        src={slide2}
                        alt="public seminar"
                        className="card-img"
                      />
                    </div>
                  </div>
                  <div className="card-content">
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur. Fringilla nisi
                      nulla eu quisque. Ac vitae tellus tincidunt nibh non
                      accumsan urna.
                    </p>
                    <div className="properties">
                      <div className="colu pb-3">
                        <CgProfile className="svg" /> Lorem Ipsum Dolor
                      </div>
                      <div>Lorem Ipsum Dolor</div>
                      <div>
                        <MdOutlineCalendarMonth className="svg" />{" "}
                        Sunday,January 20,2023{" "}
                      </div>
                      <div>
                        <AiOutlineClockCircle className="svg" /> 3:00 PM
                      </div>
                    </div>
                  </div>
                  <Link to="../seminarreg" className="click text-center">
                    <HiArrowLongRight className="arrow" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card swiper-slide">
                  <div className="image-content">
                    <div className="card-image">
                      <img
                        src={slide3}
                        alt="public seminar"
                        className="card-img"
                      />
                    </div>
                  </div>
                  <div className="card-content">
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur. Fringilla nisi
                      nulla eu quisque. Ac vitae tellus tincidunt nibh non
                      accumsan urna.
                    </p>
                    <div className="properties">
                      <div className="colu pb-3">
                        <CgProfile className="svg" /> Lorem Ipsum Dolor
                      </div>
                      <div>Lorem Ipsum Dolor</div>
                      <div>
                        <MdOutlineCalendarMonth className="svg" />{" "}
                        Sunday,January 20,2023{" "}
                      </div>
                      <div>
                        <AiOutlineClockCircle className="svg" /> 3:00 PM{" "}
                      </div>
                    </div>
                  </div>
                  <Link to="../seminarreg" className="click text-center">
                    <HiArrowLongRight className="arrow" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card swiper-slide">
                  <div className="image-content">
                    <div className="card-image">
                      <img
                        src={slide2}
                        alt="public seminar"
                        className="card-img"
                      />
                    </div>
                  </div>
                  <div className="card-content">
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur. Fringilla nisi
                      nulla eu quisque. Ac vitae tellus tincidunt nibh non
                      accumsan urna.
                    </p>
                    <div className="properties">
                      <div className="colu pb-3">
                        <CgProfile className="svg" /> Lorem Ipsum Dolor
                      </div>
                      <div>Lorem Ipsum Dolor</div>
                      <div>
                        <MdOutlineCalendarMonth className="svg" />{" "}
                        Sunday,January 20,2023{" "}
                      </div>
                      <div>
                        <AiOutlineClockCircle className="svg" /> 3:00 PM{" "}
                      </div>
                    </div>
                  </div>
                  <Link to="../seminarreg" className="click text-center">
                    <HiArrowLongRight className="arrow" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card swiper-slide">
                  <div className="image-content">
                    <div className="card-image">
                      <img
                        src={slide2}
                        alt="public seminar"
                        className="card-img"
                      />
                    </div>
                  </div>
                  <div className="card-content">
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur. Fringilla nisi
                      nulla eu quisque. Ac vitae tellus tincidunt nibh non
                      accumsan urna.
                    </p>
                    <div className="properties">
                      <div className="colu pb-3">
                        <CgProfile className="svg" /> Lorem Ipsum Dolor
                      </div>
                      <div>Lorem Ipsum Dolor</div>
                      <div>
                        <MdOutlineCalendarMonth className="svg" />{" "}
                        Sunday,January 20,2023{" "}
                      </div>
                      <div>
                        <AiOutlineClockCircle className="svg" /> 3:00 PM{" "}
                      </div>
                    </div>
                  </div>
                  <Link to="../seminarreg" className="click text-center">
                    <HiArrowLongRight className="arrow" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card swiper-slide">
                  <div className="image-content">
                    <div className="card-image">
                      <img
                        src={slide2}
                        alt="public seminar"
                        className="card-img"
                      />
                    </div>
                  </div>
                  <div className="card-content">
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur. Fringilla nisi
                      nulla eu quisque. Ac vitae tellus tincidunt nibh non
                      accumsan urna.
                    </p>
                    <div className="properties">
                      <div className="colu pb-3">
                        <CgProfile className="svg" /> Lorem Ipsum Dolor
                      </div>
                      <div>Lorem Ipsum Dolor</div>
                      <div>
                        <MdOutlineCalendarMonth className="svg" />{" "}
                        Sunday,January 20,2023{" "}
                      </div>
                      <div>
                        <AiOutlineClockCircle className="svg" /> 3:00 PM{" "}
                      </div>
                    </div>
                  </div>
                  <Link to="../seminarreg" className="click text-center">
                    <HiArrowLongRight className="arrow" />
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="text-center">
              <Link onClick={handleClickSeeAll} className="seeAll mt-5">
                <span className="see">See All</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  }
