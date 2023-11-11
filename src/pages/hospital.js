import React, { useRef, useCallback, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import neuro from "../icons/Rect328.png";
import plastic from "../icons/Rect329.png";
import fertility from "../icons/Rect330.png";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Hospital({ heading, data }) {
  const [details, setDetails] = useState({});

  const handleClick = (id) => {
    setDetails((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [data]);

  if (!data) {
    return null;
  }

  const { t, i18n } = useTranslation();
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
        {data &&
          data.map((item) => (
            <SwiperSlide key={item.id}>
              {details[item.id] ? (
                <div className="capex">
                  <p
                    className="explanation"
                    onClick={() => handleClick(item.id)}
                  >
                    <strong>{item.title}</strong>
                    <br /> {item.description}
                  </p>
                </div>
              ) : (
                <div>
                  <div>
                    <figure className="centerFig">
                      <img
                        src={`https://portals.mentalland.com/image/hospital/${item.img}`}
                        alt="hospital mentalland"
                        className="drhotel"
                      />
                      <figcaption className="captiontext">
                        {item.title}
                      </figcaption>
                      <Link
                        to="#"
                        className="captionlink"
                        onClick={() => handleClick(item.id)}
                      >
                        {t("ReadMore")}
                      </Link>
                    </figure>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}

        <SwiperSlide>
          <div>
            <figure className="centerFig">
              <img src={neuro} alt="Neurosurgery" className="drhotel" />
              <figcaption class="captiontext">Sasan Hospital</figcaption>
              <Link href="#" class="captionlink">
                Read More
              </Link>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <figure className="centerFig">
              <img
                src={plastic}
                alt="Plastic and Cosmetic Surgery"
                className="drhotel"
              />
              <figcaption class="captiontext">Sasan Hospital</figcaption>
              <Link href="#" class="captionlink">
                Read More
              </Link>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <figure className="centerFig">
              <img src={fertility} alt="Fertility" className="drhotel" />
              <figcaption class="captiontext">Sasan Hospital</figcaption>
              <Link href="#" class="captionlink">
                Read More
              </Link>
            </figure>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
