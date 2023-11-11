import React, { useState, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Form from "react-bootstrap/Form";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/modules/navigation/navigation";
import "swiper/modules/pagination/pagination";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";


export default function Explain( {data, comments, plan} ) {
  const [activeButton, setActiveButton] = useState(0);
  const { t, i18n } = useTranslation();

  const handleButtonClick = (index) => {
    setActiveButton(index);
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

   let content;
   if (activeButton === 0 && data.about_us) {
     content = data.about_us.replace(/<[^>]*>/g, "");
   } else if (activeButton === 1) {
     content = comments.map((comment) => comment.answer_comment);
   } else if (activeButton === 2) {
     content = plan.date;
   }
  
  const activeClass = activeButton === 0 ? "active" : "";
  const activePlan = activeButton === 2 ? "active" : "";


  return (
    <div>
      <section className="knowing">
        <div className="knowme">
          <span
            className={
              activeClass +
              " " +
              (i18n.language === "fa" ? "persianMode" : "aboutme")
            }
            onClick={() => handleButtonClick(0)}
          >
            <span className="tx">{t("AboutMe")}</span>
          </span>
          <span
            className={activeButton === 1 ? "active comments" : "comments"}
            onClick={() => handleButtonClick(1)}
          >
            <span className="tx">{t("Comments")}</span>
          </span>
          <span
            className={
              activePlan +
              " " +
              (i18n.language === "fa" ? "rtlMode" : "weeklyplan")
            }
            onClick={() => handleButtonClick(2)}
          >
            <span className="tx">{t("WeeklyPlan")}</span>
          </span>
        </div>
        {activeButton === 2 ? (
          <div className="explain">
            {" "}
            <div className="timeplan">
              choose your time zone
              <Form>
                <Form.Select aria-label="wid" className="timezone mb-3"></Form.Select>
              </Form>
              <div>
      <div className="yyy">
        <h1 className="timeformat text-start">All Times are presented in 24-hour format (for example 2:00 is 2:00am)</h1>
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
        ref={sliderRef}
        spaceBetween={10}
        slidesPerView={5}
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {plan.map((item) => (
          <SwiperSlide key={item.id}>
           <div className="date-day">{item.date}</div>
          </SwiperSlide>
        ))}
      </Swiper></div>
            </div>
          </div>
        ) : (
          <div className="explain">{content}</div>
        )}
      </section>
    </div>
  );
}
