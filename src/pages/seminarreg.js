import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import seminar from "../icons/seminar.svg";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import CartContext from "./cartContext";

export default function Seminarreg() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {t,i18n} = useTranslation()

  const eventUrl = t("eventUrl");

  useEffect(() => {
    fetch(eventUrl)
      .then((response) => response.json())
      .then((data) => {
        const selectedItem = data.data.find((item) => item.id === Number(id));
        console.log(selectedItem);
        setItem(selectedItem);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [eventUrl]);

   useEffect(() => {
    setItem([]);
     fetch(eventUrl)
       .then((response) => response.json())
       .then((data) => {
         const selectedItem = data.data.find((item) => item.id === Number(id));
         console.log(selectedItem);
         setItem(selectedItem);
         setIsLoading(false);
       })
       .catch((error) => console.log(error));
   }, [i18n.language]);

 const { dispatch } = useContext(CartContext);
  
 const handleLinkClick = () => {
    dispatch({
      type: "UPDATE_CART_DATA",
      payload: {
        titleEvent: item ? item.title_event : null,
        dateEvent: item ? item.date_events : null,
        priceEvent: item ? item.price_event : null,
      },
    });
  };

  return (
    <div className="seminardetails">
      <Header className="whatsapp" />
      <Navbar />
      <div className="master">
        <div className="regbar">
          <div className="regbar-image">
            <img
              src={`https://portals.mentalland.com/image/events/${
                isLoading
                  ? "Loading..."
                  : item
                  ? item.thumbnail_events
                  : "No data"
              }`}
              className="seminarimg img-fluid"
              alt="seminar"
            />
          </div>
          <div className="seminarexp">
            <h5 className="seminarheading">
              {isLoading ? "Loading..." : item ? item.title_event : "No data"}
            </h5>
            <div className="seminardateprice">
              <span>
                {isLoading ? "Loading..." : item ? item.date_events : "No data"}
              </span>{" "}
              <span>
                Ticket Price:{" "}
                {isLoading ? "Loading..." : item ? item.price_event : "No data"}{" "}
              </span>
            </div>
            <div className="seminarwords">
              Challenges in Mental Illness & development of integrated mental
              health services
            </div>
            <div className="seminarguest">
              <span>
                <img
                  src={`https://portals.mentalland.com/image/events/teacher/${
                    isLoading
                      ? "Loading..."
                      : item
                      ? item.teacher_image_events
                      : "No data"
                  }`}
                  className="guestimg"
                  alt="seminar guest"
                />
                {isLoading
                  ? "Loading..."
                  : item
                  ? item.teacher_events
                  : "No data"}
              </span>{" "}
              <span>
                <img src={seminar} className="guestimg" alt="seminar guest" />
                Dr. Tom Brown
              </span>
            </div>
            <div className="seminartags">
              <span>Education & Training</span>{" "}
              <span>Wellness, Health & Fitness</span>
            </div>
          </div>
        </div>
        <div className="seminarInfo">
          <div className="guestIntro mb-3">Guests Introduction:</div>
          <div className="guestIntrowords">
            <div className="guestIntroN">
              <img
                src={`https://portals.mentalland.com/image/events/teacher/${
                  isLoading
                    ? "Loading..."
                    : item
                    ? item.teacher_image_events
                    : "No data"
                }`}
                className="guestimg"
                alt="seminar guest"
              />
              {isLoading
                ? "Loading..."
                : item
                ? item.teacher_events
                : "No data"}
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur. Vitae commodo dignissim
              donec venenatis dolor ut vehicula. Euismod lobortis vulputate arcu
              massa. Facilisis dapibus tempor id auctor lobortis dictumst.
              Turpis id commodo eget pellentesque. Porta arcu id malesuada eu
              elit sodales ultrices. Tristique ipsum orci scelerisque proin nec
              posuere ornare pellentesque. Ullamcorper vulputate massa neque
              condimentum imperdiet viverra volutpat. Consectetur varius enim
              purus sed arcu egestas. Nisl velit pharetra gravida felis.
              Tincidunt dolor duis vestibulum scelerisque. Turpis diam nec in
              leo aliquam euismod et. At turpis.
            </div>
            <div className="mt-5">
              <img src={seminar} className="guestimg" alt="seminar guest" />
              Dr. Tom Brown
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur. Vitae commodo dignissim
              donec venenatis dolor ut vehicula. Euismod lobortis vulputate arcu
              massa. Facilisis dapibus tempor id auctor lobortis dictumst.
              Turpis id commodo eget pellentesque. Porta arcu id malesuada eu
              elit sodales ultrices. Tristique ipsum orci scelerisque proin nec
              posuere ornare pellentesque. Ullamcorper vulputate massa neque
              condimentum imperdiet viverra volutpat. Consectetur varius enim
              purus sed arcu egestas. Nisl velit pharetra gravida felis.
              Tincidunt dolor duis vestibulum scelerisque. Turpis diam nec in
              leo aliquam euismod et. At turpis.
            </div>
          </div>
          <div className="guestIntro mt-5">About seminar</div>
          <div className="guestIntrowords">
            <h5 className="seminarheadingw">
              {isLoading ? "Loading..." : item ? item.title_event : "No data"}
            </h5>
            <div>
              {isLoading
                ? "Loading..."
                : item
                ? item.description_events.replace(/<[^>]*>/g, "")
                : "No data"}
            </div>
          </div>
        </div>
        <div>
          <Link onClick={handleLinkClick} className="btn-card">
            <span className="login">
              <BiShoppingBag className="svg" />
              {""}Add to Cart
            </span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
