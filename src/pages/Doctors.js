import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

export default function Doctors(props) {

  return (
    <div className="bar">
      <div className="part">
        <img src={props.info.image} className="photo" alt="personal" />
      </div>
      <div className="part container-fluid">
        <div className="sub who">
          <h2 className="drname"><span>{props.info.name}</span>{" "}<span className="drname">{props.info.lname}</span></h2>
          <h3 className="dreducation">{props.info.madrak}</h3>
          <div className="level mt-4 mb-3">
            <AiFillStar className="star" />
            <span className="rate">{props.info.star}</span>
            <span className="experience">+1000 Consultations</span>
          </div>
        </div>
        <div className="workField">
            {props.info.expertise.map((specialty, index) => (
                        <>
                          {index > 0 ? " " : ""}
                          <span className="field">{specialty}</span>
                        </>
                      ))}
        </div>
        <div className="hhh">
          <Link to={`/pages/consultantadults/${props.info.id}`} className="counsel">
            <div className="justnow">Start Counseling</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
