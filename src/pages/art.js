import React from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import artback from "../icons/Rectangle 44- (1).png";
import artstu from "../icons/Group 1031.svg";
import artcou from "../icons/artcou.svg";
import artinst from "../icons/Group 1033.svg";
import madults from "../icons/Rectangle 83adult.png";
import mchildren from "../icons/Rectangle 84teen.png";
import arttherapy from "../icons/Group 1057.png";
import musicrelax from "../icons/Group 1058.png";
import dancing from "../icons/Group 909.png";
import writing from "../icons/Rectangle 85.png";
import { Link } from "react-router-dom";

export default function Art() {
    return (
      <div className="art">
        <div
          style={{
            backgroundImage: `url("${artback}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom center",
            height: "720px",
          }}
        >
          <Header className="instagram isSpecialPage" />
          <Navbar />
          <div className="AH">
            <h1 className="AHheading text-center">arts & health</h1>
            <div className="AHwords text-center">
              Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
              volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut
              vitae felis convallis. Egestas enim diam ac nisi orci id tellus
              lobortis. Lacus in etiam rhoncus.
            </div>
          </div>
        </div>
        <div className="parental">
          <div className="precendent">
            <figure>
              <div className="thumbnail">
                <img
                  src={artstu}
                  alt="art instructors"
                  className="artinst img-fluid"
                />
                <span className="n1">+1000</span>
                <span className="t1">Art Students</span>
              </div>
            </figure>
            <figure>
              <div className="thumbnail">
                <img
                  src={artcou}
                  alt="art courses"
                  className="artcou img-fluid"
                />
                <div className="ncaption">
                  <span className="n2">15</span>
                  <span className="t2">Art Courses</span>
                </div>
              </div>
            </figure>
            <figure>
              <div className="thumbnail">
                <img
                  src={artinst}
                  alt="art instructors"
                  className="artinst img-fluid"
                />
                <span className="n3">20</span>
                <span className="t3">Art Instructors</span>
              </div>
            </figure>
          </div>
          <div>
            <h1 className="MADheading">Mental art department</h1>
            <div className="MADimages">
              <Link to="/pages/artadults" style={{ textDecoration: "none" }}>
                <figure>
                  <div className="madults">
                    <img
                      src={madults}
                      className="img-fluid"
                      alt="Mental art department for adults"
                    />
                  </div>
                  <figcaption className="madwords">ADULTS</figcaption>
                </figure>
              </Link>
              <Link to="/pages/artchildren" style={{ textDecoration: "none" }}>
                <figure>
                  <div className="mchildren">
                    <img
                      src={mchildren}
                      className="img-fluid"
                      alt="Mental art department for children & teenagers"
                    />
                  </div>
                  <figcaption className="mchwords">
                    CHILDREN & TEENAGERS
                  </figcaption>
                </figure>
              </Link>
            </div>
          </div>
          <div className="arttherapy">
            <div className="therapyimage">
              <img src={arttherapy} className="img-fluid" alt="art therapy" />
            </div>
            <div className="therapypass">
              <h2 className="therapyheading">knowing more about art therapy</h2>
              <div className="therapywords">
                Lorem ipsum dolor sit amet consectetur. Ut aliquam cursus ac
                cras massa turpis suspendisse est. Tincidunt sit cum aliquam
                enim ipsum at dolor sapien. Pulvinar gravida gravida viverra
                blandit ac massa nibh. Tortor viverra elementum varius amet. Leo
                varius id sed mattis. Imperdiet scelerisque amet commodo ornare
                mattis sem. <br /> Euismod at placerat ipsum arcu habitasse
                pretium nunc. Id donec massa fames malesuada viverra. Sed
                suspendisse nec ut sodales a amet facilisis mattis risus. Tortor
                aliquet turpis commodo ipsum et. Faucibus orci magna in proin
                penatibus.
              </div>
              <div className="link">
                <Link to="/pages/artadults" className="learnMore ">
                  <span className="more">Adults</span>
                </Link>
                <Link to="/pages/artchildren" className="learnMore linkto">
                  <span className="more">Children & Teenagers</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="arttherapy">
            <div className="musicrelaxpass">
              <h2 className="therapyheading">Music & Relaxation</h2>
              <div className="therapywords">
                Lorem ipsum dolor sit amet consectetur. Ut aliquam cursus ac
                cras massa turpis suspendisse est. Tincidunt sit cum aliquam
                enim ipsum at dolor sapien. Pulvinar gravida gravida viverra
                blandit ac massa nibh. Tortor viverra elementum varius amet. Leo
                varius id sed mattis. Imperdiet scelerisque amet commodo ornare
                mattis sem. <br /> Euismod at placerat ipsum arcu habitasse
                pretium nunc. Id donec massa fames malesuada viverra. Sed
                suspendisse nec ut sodales a amet facilisis mattis risus. Tortor
                aliquet turpis commodo ipsum et. Faucibus orci magna in proin
                penatibus.
              </div>
              <div className="link">
                <Link to="/pages/musicadults" className="learnMore ">
                  <span className="more">Adults</span>
                </Link>
                <Link to="/pages/musicchildren" className="learnMore linkto">
                  <span className="more">Children & Teenagers</span>
                </Link>
              </div>
            </div>
            <div className="musicrelaximage">
              <img src={musicrelax} className="img-fluid" alt="music therapy" />
            </div>
          </div>
          <div className="arttherapy">
            <div className="dancingimage">
              <img src={dancing} className="img-fluid" alt="art therapy" />
            </div>
            <div className="therapypass">
              <h2 className="therapyheading">health benefits of dancing</h2>
              <div className="therapywords">
                Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
                sit bibendum habitant integer a commodo. Malesuada bibendum
                libero sodales vitae interdum leo posuere. Rhoncus tincidunt
                sociis proin proin sit in tortor tincidunt. Sed semper malesuada
                eget faucibus suspendisse diam quam eleifend. Vestibulum egestas
                ultrices leo ut. Fusce porttitor pellentesque at consectetur
                bibendum turpis. Eu condimentum aliquam auctor duis.
              </div>
              <div className="link">
                <Link to="#" className="learnMore ">
                  <span className="more">Adults</span>
                </Link>
                <Link to="#" className="learnMore linkto">
                  <span className="more">Children & Teenagers</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="arttherapy">
            <div className="writingpass">
              <h2 className="therapyheading">
                relation between writing & getting calm
              </h2>
              <div className="therapywords">
                Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
                sit bibendum habitant integer a commodo. Malesuada bibendum
                libero sodales vitae interdum leo posuere. Rhoncus tincidunt
                sociis proin proin sit in tortor tincidunt. Sed semper malesuada
                eget faucibus suspendisse diam quam eleifend. Vestibulum egestas
                ultrices leo ut. <br />
                Fusce porttitor pellentesque at consectetur bibendum turpis. Eu
                condimentum aliquam auctor duis accumsan.
              </div>
              <div className="link">
                <Link to="#" className="learnMore ">
                  <span className="more">Adults</span>
                </Link>
                <Link to="#" className="learnMore linkto">
                  <span className="more">Children & Teenagers</span>
                </Link>
              </div>
            </div>
            <div className="writingimage">
              <img src={writing} className="img-fluid" alt="music therapy" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}