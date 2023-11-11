import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import musicbg from "../icons/Group 1067- (1).png";
import Gui from "../icons/Guitar.svg";
import Pia from "../icons/Piano.svg";
import Si from "../icons/Sing.svg";
import Tru from "../icons/Trumpet.svg";
import Vio from "../icons/Violin.svg";
import { Link } from "react-router-dom";
import Guitarad from "../icons/Group 1355.png";
import Pianoad from "../icons/Group 1135.png";
import Singad from "../icons/Group 1138.png";
import Trumpetad from "../icons/Group 1354.png";
import Violinad from "../icons/Group 1136.png";
import Patientcomments from "./patientcomments";
import { useTranslation } from "react-i18next";

export default function Musicadults() {
  const { i18n } = useTranslation();
  const [stuComments, setStuComments] = useState([]);

  const patientUrl =
    "https://portals.mentalland.com/api/V1/homepage/patient_comments_" +
    i18n.language;

  useEffect(() => {
    fetch(patientUrl)
      .then((response) => response.json())
      .then((data) => {
        const sanitizedData = JSON.stringify(data).replace(/<[^>]*>/g, "");
        setStuComments(JSON.parse(sanitizedData).data);
      });
  }, [patientUrl]);

  useEffect(() => {
    setStuComments([]);
    fetch(patientUrl)
      .then((response) => response.json())
      .then((data) => {
        const sanitizedData = JSON.stringify(data).replace(/<[^>]*>/g, "");
        setStuComments(JSON.parse(sanitizedData).data);
      });
  }, [i18n.language]);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("${musicbg}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          height: "calc(130vh - 50px)",
        }}
      >
        <Header className="instagram" />
        <Navbar />
        <div className="musicforadults">
          <h1 className="musicforadultsheading text-center">
            Music is Everything{" "}
          </h1>
          <div className="musicforadultswords text-center">
            Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
            volutpat quis in erat. Sit aenean eget nascetur mus non.
          </div>
        </div>
      </div>
      <div className="wholecontent">
        <div className="musicHall text-center">
          <ScrollLink to="guitar" smooth={true} duration={250}>
            <img
              src={Gui}
              className="instrument"
              alt="Mentalland music course"
              style={{
                filter: "hue-rotate(208deg)",
              }}
              onMouseEnter={(e) => (e.target.style.filter = "none")}
              onMouseLeave={(e) =>
                (e.target.style.filter = "hue-rotate(208deg)")
              }
            />
          </ScrollLink>
          <ScrollLink to="piano" smooth={true} duration={250}>
            <img
              src={Pia}
              className="instrument"
              alt="Mentalland music course"
              onMouseEnter={(e) =>
                (e.target.style.filter = "hue-rotate(153deg) brightness(0.92)")
              }
              onMouseLeave={(e) => (e.target.style.filter = "none")}
            />
          </ScrollLink>
          <ScrollLink to="sing" smooth={true} duration={250}>
            <img
              src={Si}
              className="instrument"
              alt="Mentalland music course"
              onMouseEnter={(e) =>
                (e.target.style.filter = "hue-rotate(153deg) brightness(0.92)")
              }
              onMouseLeave={(e) => (e.target.style.filter = "none")}
            />
          </ScrollLink>
          <ScrollLink to="trumpet" smooth={true} duration={250}>
            <img
              src={Tru}
              className="instrument"
              alt="Mentalland music course"
              onMouseEnter={(e) =>
                (e.target.style.filter = "hue-rotate(153deg) brightness(0.92)")
              }
              onMouseLeave={(e) => (e.target.style.filter = "none")}
            />
          </ScrollLink>
          <ScrollLink to="violin" smooth={true} duration={250}>
            <img
              src={Vio}
              className="instrument"
              alt="Mentalland music course"
              onMouseEnter={(e) =>
                (e.target.style.filter = "hue-rotate(153deg) brightness(0.92)")
              }
              onMouseLeave={(e) => (e.target.style.filter = "none")}
            />
          </ScrollLink>
        </div>
        <Element name="guitar">
          <div className="adpainting">
            <div className="adpaintingImg">
              <img
                src={Guitarad}
                className="img-fluid"
                alt="Mentalland guitar course for adults"
              />
            </div>
            <div>
              <h2 className="adpaintingheading">Guitar course</h2>
              <div className="adpaintingwords">
                Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
                sit bibendum habitant integer a commodo. Malesuada bibendum
                libero sodales vitae interdum leo posuere. Rhoncus tincidunt
                sociis proin proin sit in tortor tincidunt. Sed semper malesuada
                eget faucibus suspendisse diam quam eleifend. Vestibulum egestas
                ultrices leo ut. <br /> Fusce porttitor pellentesque at
                consectetur bibendum turpis. Eu condimentum aliquam auctor duis
                accumsan cursus tristique pellentesque lorem. Eget cras proin.
              </div>
              <Link to="/pages/courseinfo/guitar" className="learnMore ">
                <span className="more">Register Now</span>
              </Link>
            </div>
          </div>
        </Element>
        <Element name="piano">
          <div className="admusic">
            <div>
              <h2 className="admusicheading">Piano Course</h2>
              <div className="admusicwords">
                Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
                sit bibendum habitant integer a commodo. Malesuada bibendum
                libero sodales vitae interdum leo posuere. Rhoncus tincidunt
                sociis proin proin sit in tortor tincidunt. Sed semper malesuada
                eget faucibus suspendisse diam quam eleifend. Vestibulum egestas
                ultrices leo ut. <br /> Fusce porttitor pellentesque at
                consectetur bibendum turpis. Eu condimentum aliquam auctor duis
                accumsan cursus tristique pellentesque lorem. Eget cras proin.
              </div>
              <Link to="/pages/courseinfo/piano" className="learnMore ">
                <span className="more">Register Now</span>
              </Link>
            </div>
            <div className="admusicImg">
              <img
                src={Pianoad}
                className="img-fluid"
                alt="Mentalland piano course for adults"
              />
            </div>
          </div>
        </Element>
        <Element name="sing">
          <div className="adwrite">
            <div className="adwritingImg">
              <img
                src={Singad}
                className="img-fluid"
                alt="Mentalland singing course for adults"
              />
            </div>
            <div>
              <h2 className="adwritingheading">Singing course </h2>
              <div className="adwritingwords">
                Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
                sit bibendum habitant integer a commodo. Malesuada bibendum
                libero sodales vitae interdum leo posuere. Rhoncus tincidunt
                sociis proin proin sit in tortor tincidunt. Sed semper malesuada
                eget faucibus suspendisse diam quam eleifend. Vestibulum egestas
                ultrices leo ut. <br /> Fusce porttitor pellentesque at
                consectetur bibendum turpis. Eu condimentum aliquam auctor duis
                accumsan cursus tristique pellentesque lorem. Eget cras proin.
              </div>
              <Link to="/pages/courseinfo/sing" className="learnMore ">
                <span className="more">Register Now</span>
              </Link>
            </div>
          </div>
        </Element>
        <Element name="trumpet">
          <div className="addance">
            <div>
              <h2 className="addanceheading">Trumpet Course </h2>
              <div className="addancewords">
                Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
                sit bibendum habitant integer a commodo. Malesuada bibendum
                libero sodales vitae interdum leo posuere. Rhoncus tincidunt
                sociis proin proin sit in tortor tincidunt. Sed semper malesuada
                eget faucibus suspendisse diam quam eleifend. Vestibulum egestas
                ultrices leo ut. <br /> Fusce porttitor pellentesque at
                consectetur bibendum turpis. Eu condimentum aliquam auctor duis
                accumsan cursus tristique pellentesque lorem. Eget cras proin.
              </div>
              <Link to="/pages/courseinfo/trumpet" className="learnMore ">
                <span className="more">Learn more</span>
              </Link>
            </div>
            <div className="adwritingImg">
              <img
                src={Trumpetad}
                className="img-fluid"
                alt="Mentalland trumpet course for adults"
              />
            </div>
          </div>
        </Element>
        <Element name="violin">
          <div className="adwrite">
            <div className="adwritingImg">
              <img
                src={Violinad}
                className="img-fluid"
                alt="Mentalland violin course for adults"
              />
            </div>
            <div>
              <h2 className="adwritingheading">Violin course </h2>
              <div className="adwritingwords">
                Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
                sit bibendum habitant integer a commodo. Malesuada bibendum
                libero sodales vitae interdum leo posuere. Rhoncus tincidunt
                sociis proin proin sit in tortor tincidunt. Sed semper malesuada
                eget faucibus suspendisse diam quam eleifend. Vestibulum egestas
                ultrices leo ut. <br /> Fusce porttitor pellentesque at
                consectetur bibendum turpis. Eu condimentum aliquam auctor duis
                accumsan cursus tristique pellentesque lorem. Eget cras proin.
              </div>
              <Link to="/pages/courseinfo/violin" className="learnMore ">
                <span className="more">Register Now</span>
              </Link>
            </div>
          </div>
        </Element>
        <div className="studentcomments">
          <Patientcomments
            comments={stuComments}
            heading="What Our Students Say About US"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
