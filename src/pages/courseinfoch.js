import React from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import seminar from "../icons/seminar.svg";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Courseinfoch() {
  return (
    <div>
      <Header className="instagram" />
      <Navbar />
      <div className="master">
        <div className="regbar">
          <img src={seminar} className="seminarimg" alt="course" />
          <div className="seminarexp">
            <h5 className="seminarheading">
              international conference on mental health & therapy
            </h5>
            <div className="courseinfo">
              <span>Session: 2</span> <span>Price: $30</span>{" "}
              <span>Offline videos: No</span> <span>Online Support: Yes</span>
            </div>
            <div className="coachintro">
              <span>
                <img src={seminar} className="guestimg" alt="seminar guest" />
                Dr. Elizabeth Smith
              </span>
            </div>
            <div className="coursewords">
              <span>
                {" "}
                lorem ipsum dolor sit amet consectetur. Vitae commodo dignissim
                donec venenatis dolor ut vehicula. euismod lobortis.
              </span>
              <span>
                <Link to="/" className="btn-addcard">
                  <span className="login">
                    <BiShoppingBag className="svg" />
                    {""}Add to Cart
                  </span>
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="courseInfo">
          <div className="guestIntro mb-3">Coach Introduction:</div>
          <div className="guestIntrowords">
            <div>
              <img src={seminar} className="guestimg" alt="seminar guest" />
              Dr. Elizabeth Smith
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
          <div className="guestIntro mt-5">About hiphop</div>
          <div className="guestIntrowords">
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
        </div>{" "}
        <div className="seminarheading mb-3">
          {" "}
          What Do you Think About This Coach?
        </div>
        <div className="commentbar mb-5">
          <div className="coachcomment">
            <img src={seminar} className="coachimg" alt="seminar guest" />
            <span className="coachnamestar">
              <span> Dr. Elizabeth Smith</span>
              <br />
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
            </span>
            <span className="time">January 21, 2023</span>
          </div>
          <div className="commenttext mt-3">
            Lorem ipsum dolor sit amet consectetur. Nunc pharetra massa velit
            consectetur lectus erat. Tincidunt dis egestas aliquet adipiscing
            donec. Sed cras vulputate amet scelerisque. Varius etiam enim velit
            arcu arcu eget. Nunc a quis enim nibh posuere cras aenean purus.
            Nulla sagittis semper cum rhoncus varius quis vitae venenatis nibh.
            Senectus fames quisque porta vitae facilisis commodo consequat.
            Feugiat enim odio in sed condimentum. Id et purus est risus.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
