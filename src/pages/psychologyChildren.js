import React, { useState, useEffect } from "react";
import Header from "../header";
import Navbar from "../Navbar";
import union from "../icons/Group 1249Ch (2).png";
import Consultants from "./consultants";
import Patientcomments from "./patientcomments";
import Footer from "../footer";
import ok from "../icons/okVector.svg";
import gchpsy from "../icons/Rectangle 67ch.png";
import charticle from "../icons/Group 928.png";
import charticle2 from "../icons/Group 930.png";
import { IoBodyOutline } from "react-icons/io5";
import { RiRestaurant2Fill } from "react-icons/ri";
import { TbCloudRain, TbFriends } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";
import {
  MdNoFood,
  MdOutlinePsychology,
  MdFamilyRestroom,
} from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ContsBackCh from "../icons/Frame 14--.png";


export default function Psychildren() {
  const [consultants, setConsultants] = useState([]);
  const [comments, setComments] = useState([]);
  const { i18n } = useTranslation();

  const patientUrl =
    "https://portals.mentalland.com/api/V1/homepage/patient_comments_" +
    i18n.language;

  useEffect(() => {
    fetch(patientUrl)
      .then((response) => response.json())
      .then((data) => {
        const sanitizedData = JSON.stringify(data).replace(/<[^>]*>/g, "");
        setComments(JSON.parse(sanitizedData).data);
      });
  }, [patientUrl]);

  useEffect(() => {
    setComments([]);
    fetch(patientUrl)
      .then((response) => response.json())
      .then((data) => {
        const sanitizedData = JSON.stringify(data).replace(/<[^>]*>/g, "");
        setComments(JSON.parse(sanitizedData).data);
      });
  }, [i18n.language]);

  const url =
    "https://portals.mentalland.com/api/V1/homepage/consts_list_homepage_" +
    i18n.language;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setConsultants(data.data));
  }, [url]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setConsultants(data.data));
  }, [i18n.language]);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url("${union}")`,
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          height: "calc(130vh - 50px)",
        }}
      >
        <Header className="whatsapp" />
        <Navbar />
        <div className="chenjoy text-center">
          <h1 className="lets">Let's Enjoy!</h1>
          <h2 className="enjoy">
            Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
            volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut
            vitae felis convallis. Egestas enim diam ac nisi orci id tellus
            lobortis. Lacus in etiam rhoncus.
          </h2>
        </div>
      </div>
      <div className="kids">
        <div className="childpsy">
          <div className="parta">
            <h1 className="psychservices text-center">
              Children / Teenagers Psychology Services
            </h1>
            <div>
              <div className="subjects">
                <Link
                  to="/pages/depressionchildren/mental"
                  style={{ textDecoration: "none" }}
                >
                  <figure>
                    <TbCloudRain className="round" />
                    <figcaption className="text-center captionl">
                      Depression
                    </figcaption>
                  </figure>
                </Link>
                <Link
                  to="/pages/depressionchildren/Anxiety"
                  style={{ textDecoration: "none" }}
                >
                  <figure>
                    <GiBrain className="round" />{" "}
                    <figcaption className="text-center captionl">
                      Anxiety
                    </figcaption>
                  </figure>
                </Link>
                <Link
                  to="/pages/depressionchildren/Unhealty Eating"
                  style={{ textDecoration: "none" }}
                >
                  <figure>
                    <TbFriends className="round" />
                    <figcaption className="text-center captionl">
                      Peer relationship difficulties{" "}
                    </figcaption>
                  </figure>
                </Link>
                <Link
                  to="/pages/depressionchildren/Life transitions, Relationship Difficulties"
                  style={{ textDecoration: "none" }}
                >
                  <figure>
                    <MdNoFood className="round" />
                    <figcaption className="text-center captionl">
                      Unhealty Eating{" "}
                    </figcaption>
                  </figure>
                </Link>
                <Link
                  to="/pages/depressionchildren/Adjustment Issues"
                  style={{ textDecoration: "none" }}
                >
                  <figure>
                    <RiRestaurant2Fill className="round" />
                    <figcaption className="text-center captionl">
                      Eating Disorders{" "}
                    </figcaption>
                  </figure>
                </Link>
                <Link
                  to="/pages/depressionchildren/Adjustment Issues"
                  style={{ textDecoration: "none" }}
                >
                  <figure>
                    <IoBodyOutline className="round" />
                    <figcaption className="text-center captionl">
                      Body Image{" "}
                    </figcaption>
                  </figure>
                </Link>
                <Link
                  to="/pages/depressionchildren/Adjustment Issues"
                  style={{ textDecoration: "none" }}
                >
                  <figure>
                    <MdFamilyRestroom className="round" />
                    <figcaption className="text-center captionl">
                      Parent-child relationship issues{" "}
                    </figcaption>
                  </figure>
                </Link>
                <Link
                  to="/pages/depressionchildren/Adjustment Issues"
                  style={{ textDecoration: "none" }}
                >
                  <figure>
                    <MdOutlinePsychology className="round" />
                    <figcaption className="text-center captionl">
                      Disruptive child behaviors, including ADHD{" "}
                    </figcaption>
                  </figure>
                </Link>
              </div>
            </div>
          </div>
          <div className="partb">
            <div className="meetc">
              <div className="meetch">
                <h2 className="meettitle">Children / Teenagers Psychology</h2>
                <div className="meetcontent">
                  Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi
                  mollis sit tortor proin proin sagittis. Id nec suspendisse
                  lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula
                  donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi
                  feugiat nulla enim. Nisl phasellus viverra quisque egestas in
                  nec luctus ornare amet. In pellentesque volutpat urna ultrices
                  vitae. Sed magna vitae placerat eu leo potenti semper id. Sed
                  elementum eget adipiscing nisl in vestibulum. Volutpat. <br />
                  <img src={ok} className="ok" alt="ok vector" /> Lorem ipsum
                  dolor sit amet consectetur. Pretium rutrum nisi mollis sit
                  tortor proin proin sagittis.
                  <br />
                  <img src={ok} className="ok" alt="ok vector" /> Lorem ipsum
                  dolor sit amet consectetur.
                  <br />
                  <img src={ok} className="ok" alt="ok vector" /> Lorem ipsum
                  dolor sit amet consectetur. <br />
                  <img src={ok} className="ok" alt="ok vector" /> Lorem ipsum
                  dolor sit amet consectetur.
                </div>
              </div>
              <div className="meetchph">
                <img
                  src={gchpsy}
                  className="img-fluid"
                  alt="adults psychology"
                />
              </div>
            </div>
          </div>
          <div className="partc">
            <Consultants
              data={consultants}
              backgroundImage={ContsBackCh}
              heading="Children / Teenagers Psychology Consultants & Psychologists"
              color="#eaf6f6"
            />
          </div>
          <div className="partd">
            <div className="article">
              <div className="articlead">
                <h2 className="articletitle">Children Psychology Article</h2>
                <div className="articlecontent">
                  Lorem ipsum dolor sit amet consectetur. Id tincidunt amet ut
                  eget in mauris amet fermentum. Nulla in id gravida erat.
                  Volutpat magna viverra massa at diam fermentum. Venenatis
                  tortor feugiat accumsan amet pretium ac ac eu dictum. Rhoncus
                  quam nulla id cursus in sit neque. Risus id turpis in
                  sollicitudin nisi. Ac convallis sit dictum ac tristique diam
                  nulla. Ipsum tortor fermentum sociis non quam. Tristique quis
                  molestie adipiscing lacus viverra etiam at aliquet. Volutpat
                  ut nec sed et suspendisse nisi massa et. Vitae dui convallis
                  euismod malesuada praesent molestie.
                </div>
              </div>
              <div className="articleph">
                <img
                  src={charticle}
                  className="img-fluid"
                  alt="adults psychology"
                />
              </div>
            </div>
          </div>
          <div className="parte">
            <div className="article2child">
              <div className="article2ph">
                <img
                  src={charticle2}
                  className="img-fluid"
                  alt="adults psychology"
                />
              </div>
              <div className="article2ch">
                <h2 className="article2title">Children Psychology Article</h2>
                <div className="article2content">
                  Lorem ipsum dolor sit amet consectetur. Id tincidunt amet ut
                  eget in mauris amet fermentum. Nulla in id gravida erat.
                  Volutpat magna viverra massa at diam fermentum. Venenatis
                  tortor feugiat accumsan amet pretium ac ac eu dictum.
                  <br /> Rhoncus quam nulla id cursus in sit neque. Risus id
                  turpis in sollicitudin nisi. Ac convallis sit dictum ac
                  tristique diam nulla. Ipsum tortor fermentum sociis non quam.
                  Tristique quis molestie adipiscing lacus viverra etiam at
                  aliquet. Volutpat ut nec sed et suspendisse nisi massa et.
                  Vitae dui convallis euismod malesuada praesent molestie.
                </div>
              </div>
            </div>
          </div>
          <div className="partf">
            <Patientcomments
              heading="What Our Patients Say About US"
              comments={comments}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
