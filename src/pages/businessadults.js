import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import adbusiness from "../icons/Group 1252.png";
import Badone from "../icons/Group 953.png";
import Badtwo from "../icons/Group 953t.png";
import { Link } from "react-router-dom";
import Customercomments from "./customercomments";
import Position from "./position";
import Positioninfo from "./PositionInfo";
import Adultcourses from "./adultcourses";
import { useTranslation } from "react-i18next";


export default function Businessadults() {
  const [businesses, setBusinesses] = useState([]);
  const [selectedJob, setSelectedJob] = useState([]);
  const [numJobs, setNumJobs] = useState(6);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const [linkClicked, setLinkClicked] = useState(false);
  const { i18n } = useTranslation();

const handleAllClicked = () => {
  setNumJobs(businesses.lenght);
  setLinkClicked(true);
}

const handleJobClick = (positionData) => {
  setSelectedJob(positionData);
 setModalIsOpen(true);
};

const categoryUrl =
  "https://portals.mentalland.com/api/V1/homepage/adverting_category?lang=" +
  i18n.language;

  useEffect(() => {
    fetch(categoryUrl)
      .then((response) => response.json())
      .then((data) => setCategory(data.data));
  }, [categoryUrl]);

  useEffect(() => {
    setCategory([]);
    fetch(categoryUrl)
      .then((response) => response.json())
      .then((data) => setCategory(data.data));
  }, [i18n.language]);


  const businessUrl =
    "https://portals.mentalland.com/api/V1/homepage/adversting_" +
    i18n.language;

  useEffect(() => {
    fetch(businessUrl)
      .then((response) => response.json())
      .then((data) => {
        const sanitizedData = JSON.stringify(data).replace(/<[^>]*>/g, "");
        setBusinesses(JSON.parse(sanitizedData).data);
      });
  }, [businessUrl]);

  useEffect(() => {
    setBusinesses([]);
    fetch(businessUrl)
      .then((response) => response.json())
      .then((data) => {
        const sanitizedData = JSON.stringify(data).replace(/<[^>]*>/g, "");
        setBusinesses(JSON.parse(sanitizedData).data);
      });
  }, [i18n.language]);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url("${adbusiness}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "calc(130vh - 50px)",
        }}
      >
        <Header className="linkedin isSpecialPage" />
        <Navbar />
        <div className="adbeexpert">
          <h1 className="adbeexpertheading">
            let's start something big together
          </h1>
          <div className="adbeexpertwords">
            Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
            volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut
            vitae felis convallis. Egestas enim diam ac nisi orci id tellus
            lobortis. Lacus in etiam rhoncus.
          </div>
          <Link to="/pages/joinus" className="adbeexpertReg">
            <span>Resigter now</span>
          </Link>
        </div>
      </div>
      <div className="business">
        <div className="courR">
          <Adultcourses data={category} heading="ADULT COURSES" />
        </div>
        <div className="businessadone">
          <div className="Badoneph">
            <img src={Badone} className="img-fluid" alt="digital marketing" />
          </div>
          <div className="Badone">
            <h2 className="Badoneheading">future of digital marketing</h2>
            <div className="Badonewords mb-5 mt-4">
              Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
              sit bibendum habitant integer a commodo. Malesuada bibendum libero
              sodales vitae interdum leo posuere. Rhoncus tincidunt sociis proin
              proin sit in tortor tincidunt. Sed semper malesuada eget faucibus
              suspendisse diam quam eleifend. Vestibulum egestas ultrices leo
              ut. Fusce porttitor pellentesque at consectetur bibendum turpis.
              Eu condimentum aliquam auctor duis accumsan cursus tristique
              pellentesque lorem. Eget cras proin.
            </div>
            <Link to="#" className="learnMore ">
              <span className="more">Learn more</span>
            </Link>
          </div>
        </div>
        <div className="businessadtwo">
          {" "}
          <div className="Badtwo">
            <h2 className="Badtwoheading">future of digital marketing</h2>
            <div className="Badtwowords mb-5 mt-4">
              Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
              sit bibendum habitant integer a commodo. Malesuada bibendum libero
              sodales vitae interdum leo posuere. Rhoncus tincidunt sociis proin
              proin sit in tortor tincidunt. Sed semper malesuada eget faucibus
              suspendisse diam quam eleifend. Vestibulum egestas ultrices leo
              ut. Fusce porttitor pellentesque at consectetur bibendum turpis.
              Eu condimentum aliquam auctor duis accumsan cursus tristique
              pellentesque lorem. Eget cras proin.
            </div>
            <Link to="#" className="learnMore ">
              <span className="more">Learn more</span>
            </Link>
          </div>
          <div className="Badtwoph">
            <img src={Badtwo} className="img-fluid" alt="digital marketing" />
          </div>
        </div>
        <div>
          <h3 className="ljo mb-5">the latest job opportunities</h3>
          <div className="posdesign">
            {businesses.slice(0, numJobs).map((business) => (
              <div key={business.id}>
                <Position business={business} onClick={handleJobClick} />
              </div>
            ))}
            <div>
              {" "}
              <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
              >
                <Positioninfo position={selectedJob} />
              </ReactModal>
            </div>
          </div>

          <div className="text-center">
            {linkClicked ? null : (
              <Link
                onClick={handleAllClicked}
                className={
                  selectedJob.length === 0 ? "seeAll mt-5 mb-3" : "d-none"
                }
              >
                <span className="see">See all</span>
              </Link>
            )}
          </div>
          <div className="ljocases"> </div>
        </div>
        <div className="stussay">
          <Customercomments heading="What Our Students Say" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
