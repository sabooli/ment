import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import colorful from "../icons/Group 1067.png";
import adultartdep from "../icons/Rectangle 83ad.png";
import {
  GiMusicalNotes,
  GiPaintBrush,
  GiDramaMasks,
  GiBallerinaShoes,
} from "react-icons/gi";
import { BsPencilSquare, BsArrowUpRight } from "react-icons/bs";
import adpainting from "../icons/Mask group.png";
import admusic from "../icons/Rectangle 87.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import adact from "../icons/Group 1068.png";
import adwrite from "../icons/Rectangle 129.png";
import addance from "../icons/Group 938.png";
import Patientcomments from "./patientcomments";
import Coach from "./coach";
import cameron from "../icons/Frame 18.png";
import snowy from "../icons/Group 912.png";

export default function Artadults() {
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
          backgroundPosition: "top center",
          height: "calc(130vh - 50px)",
        }}
      >
        <Header className="instagram  isSpecialPage" />
        <Navbar />
        <div className="colorful">
          <h1 className="colorfulheading text-center">
            welcome to the colorful world of art
          </h1>
          <div className="colorfulwords text-center">
            Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
            volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut
            vitae felis convallis. Egestas enim diam ac nisi orci id tellus
            lobortis. Lacus in etiam rhoncus.
          </div>
        </div>
      </div>
      <div className="mastdiv">
        <div className="adultartdep">
          <div className="artsdep">
            <h2 className="artsdepheading">{t("adultsArtDepartment")}</h2>
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
          <div className="adultartdepimg">
            <img
              src={adultartdep}
              className="img-fluid"
              alt="adultartdep"
            />
          </div>
        </div>
        <Element name="painting">
          <div className="adpainting">
            <div className="adpaintingimg">
              <img
                src={adpainting}
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
          <div className="admusic">
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
              <Link to="/pages/musicadults" className="learnMore ">
                <span className="more">Learn more</span>
              </Link>
            </div>
            <div className="admusicimg">
              <img
                src={admusic}
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
            backgroundSize: "contain",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 0,
            opacity: 1,
            paddingBottom: "18%",
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
            <span className="learnjoin">Join us to learn music with </span>
            <div className="cameron">CAMERON SMITH</div> April 2023
            <br />{" "}
            <Link to="#" className="learnMoreR">
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
            <div className="adactimg">
              <img
                src={adact}
                className="img-fluid"
                alt="Mentalland act course"
              />
            </div>
          </div>
        </Element>
        <Element name="write">
          <div className="adwrite">
            <div className="adwritingimg">
              <img
                src={adwrite}
                className="img-fluid"
                alt="Mentalland writing course"
              />
            </div>
            <div>
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
          <div className="addance">
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
            <div className="addanceimg">
              <img
                src={addance}
                className="img-fluid"
                alt="Mentalland dance course"
              />
            </div>
          </div>
        </Element>
          <div className="instructors">
            <Coach bgImage={snowy} />
          </div>
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
