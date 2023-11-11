import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import colorful from "../icons/Group 1250 (2).png";
import childartdep from "../icons/Rectangle 83.png";
import {
  GiMusicalNotes,
  GiPaintBrush,
  GiDramaMasks,
  GiBallerinaShoes,
} from "react-icons/gi";
import { BsPencilSquare, BsArrowUpRight } from "react-icons/bs";
import chpainting from "../icons/Group 974.png";
import chmusic from "../icons/Group 940.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import chact from "../icons/Group 942.png";
import chwrite from "../icons/Group 1069.png";
import chdance from "../icons/Group 943.png";
import Patientcomments from "./patientcomments";
import Coach from "./coach";
import cameron from "../icons/Frame 18.png";
import snowych from "../icons/Rectangle 88.png";


export default function Artchildren() {
   const { t, i18n } = useTranslation();
   const [stuComments, setStuComments] = useState([]);
     const [activeItem, setActiveItem] = useState(null);


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
    <div className="art">
      <div
        style={{
          backgroundImage: `url("${colorful}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom center",
          height: "calc(130vh - 50px)",
        }}
      >
        <Header className="instagram" />
        <Navbar />
        <div className="colorfulch">
          <div className="thumbnail">
            <h1 className="colorfulchheading text-center">Let's Enjoy! </h1>
            <div className="colorfulchwords text-center">
              Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
              volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut
              vitae felis convallis. Egestas enim diam ac nisi.
            </div>
          </div>
        </div>
      </div>
      <div className="mastdiv">
        <div className="adultartdep">
          <div className="artsdep">
            <h2 className="artsdepheading">{t("childrenArtDepartment")}</h2>
            <ul>
              <ScrollLink to="music" smooth={true} duration={500}>
                <li
                  className={activeItem === "music" ? "here" : ""}
                  onClick={() => setActiveItem("music")}
                >
                  <GiMusicalNotes className="svg" /> Music
                  <BsArrowUpRight className="floatR" />
                </li>
              </ScrollLink>
              <hr />
              <ScrollLink to="painting" smooth={true} duration={500}>
                {" "}
                <li
                  className={activeItem === "painting" ? "here" : ""}
                  onClick={() => setActiveItem("painting")}
                >
                  <GiPaintBrush className="svg" /> Painting
                  <BsArrowUpRight className="floatR" />
                </li>{" "}
              </ScrollLink>
              <hr />
              <ScrollLink to="act" smooth={true} duration={500}>
                {" "}
                <li
                  className={activeItem === "act" ? "here" : ""}
                  onClick={() => setActiveItem("act")}
                >
                  <GiDramaMasks className="svg" /> Acting
                  <BsArrowUpRight className="floatR" />
                </li>
              </ScrollLink>
              <hr />
              <ScrollLink to="write" smooth={true} duration={500}>
                {" "}
                <li
                  className={activeItem === "write" ? "here" : ""}
                  onClick={() => setActiveItem("write")}
                >
                  <BsPencilSquare className="svg" /> Writing
                  <BsArrowUpRight className="floatR" />
                </li>
              </ScrollLink>
              <hr />
              <ScrollLink to="dance" smooth={true} duration={500}>
                <li
                  className={activeItem === "dance" ? "here" : ""}
                  onClick={() => setActiveItem("dance")}
                >
                  <GiBallerinaShoes className="svg" /> Dancing
                  <BsArrowUpRight className="floatR" />
                </li>
              </ScrollLink>
              <hr />
            </ul>
          </div>
          <div className="childartdepimg">
            <img
              src={childartdep}
              className="img-fluid childartdep"
              alt="adultartdep"
              style={{ position: "relative", zIndex: 100 }}
            />
          </div>
        </div>
        <Element name="painting" className="paintDesign">
          <div className="adpainting">
            <div className="adpaintingimg">
              <img
                src={chpainting}
                className="img-fluid"
                alt="Mentalland painting course"
              />
            </div>
            <div>
              <h2 className="adpaintingheading">mentalland painting course</h2>
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
              <Link to="#" className="learnMore ">
                <span className="more">Learn more</span>
              </Link>
            </div>
          </div>
        </Element>
        <Element name="music">
          <div className="chmusic">
            <div>
              <h2 className="admusicheading">our music courses</h2>
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
              <Link to="/pages/musicchildren" className="learnMore ">
                <span className="more">Learn more</span>
              </Link>
            </div>
            <div className="chmusicimg">
              <img
                src={chmusic}
                className="img-fluid"
                alt="Mentalland music course"
              />
            </div>
          </div>
        </Element>
        <div
          className="musiccourse"
          style={{
            backgroundImage: `url("${cameron}")`,
            backgroundRepeat: "no-repeat",
            position: "relative",
            backgroundSize: "100% auto",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 0,
            opacity: 1,
            paddingBottom: "150px",
          }}
        >
          <div className="musician"></div>
          <div
            className="musiclearn"
            style={{
              position: "relative",
              zIndex: 1,
            }}
          >
            <span className="letsplay">Let's Strat Playing Guitar</span>
            <div className="cameron april">This April</div>
            <Link to="#" className="learnMoreR mt-3">
              <span className="moreR">Register Now</span>
            </Link>
          </div>
        </div>
        <Element name="act">
          <div className="adact">
            <div>
              <h2 className="adactheading">
                Be an actor/actress in mentalland art department
              </h2>
              <div className="adactwords">
                Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
                sit bibendum habitant integer a commodo. Malesuada bibendum
                libero sodales vitae interdum leo posuere. Rhoncus tincidunt
                sociis proin proin sit in tortor tincidunt. Sed semper malesuada
                eget faucibus suspendisse diam quam eleifend. Vestibulum egestas
                ultrices leo ut. <br /> Fusce porttitor pellentesque at
                consectetur bibendum turpis. Eu condimentum aliquam auctor duis
                accumsan cursus tristique pellentesque lorem. Eget cras proin.
              </div>
              <Link to="#" className="learnMore ">
                <span className="more">Learn more</span>
              </Link>
            </div>
            <div className="chactimg">
              <img
                src={chact}
                className="img-fluid"
                alt="Mentalland act course"
              />
            </div>
          </div>
        </Element>
        <Element name="write">
          <div
            className="chwrite"
          >
            <div className="chwritingimg">
              <img
                src={chwrite}
                className="img-fluid "
                alt="Mentalland writing course"
              />
            </div>
            <div className="chwritecolor">
              <h2 className="adwritingheading">
                best writing courses in mentalland
              </h2>
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
              <Link to="#" className="learnMore ">
                <span className="more">Learn more</span>
              </Link>
            </div>
          </div>
        </Element>
        <Element name="dance">
          <div className="chdance">
            <div>
              <h2 className="addanceheading">enjoy Dancing </h2>
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
              <Link to="#" className="learnMore ">
                <span className="more">Learn more</span>
              </Link>
            </div>
            <div className="chdanceimg">
              <img
                src={chdance}
                className="img-fluid"
                alt="Mentalland dance course"
              />
            </div>
          </div>
        </Element>
        <div className="chinstructors">
          <div className="instructorlist">
            <Coach bgImage={snowych} />
          </div>
        </div>
        <div className="chstucomments">
          <div className="studentcomments">
            <Patientcomments
              comments={stuComments}
              heading="What Our Students Say About US"
              style={{ position: "relative", zIndex: 1 }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
