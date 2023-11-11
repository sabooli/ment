import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";



export default function Positioninfo({ position }) {
const [activeButton, setActiveButton] = useState();
const [context, setContext] = useState();
const [positionStates, setPositionStates] = useState({});

const handleClick = (positionId) => {
  setPositionStates((prevStates) => ({
    ...prevStates,
    [positionId]: !prevStates[positionId],
  }));
};

const applyJob = () => {
 const userEmail = "ali43@gmail.com";
 const requestBody = {
  email: userEmail,
 };

 fetch(
   `https://portals.mentalland.com/api/V1/homepage/apply_adversting/${position.id}`,
   {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(requestBody),
   }
 )
   .then((response) => response.json())
   .then((data) => {
     console.log("Server Response:", data);
   })
   .catch((error) => {
     console.error(error);
   });
}

const handleButtonClick = (index) => { 
  setActiveButton(index);
  if (index === 0) {
    setContext(position && position.ad_content);
  } else if (index === 1) {
    setContext(position && position.compane_name_en);
  } else if (index === 2) {
    setContext(position && position.ad_content);
  }            
};

    return (
      <div className="posbar">
        {position && (
          <div>
            <div className="postitleinfo cotype">
              {position.ad_title}
              <AiOutlineHeart
                onClick={() => handleClick(position.id)}
                color={positionStates[position.id] ? "red" : "black"}
                style={{ fontSize: 20 }}
              />
            </div>
            <div className="category">{position.full_category}</div>
            <div className="cotype">{position.Type_cooperation}</div>
            <div className="postime">
              <span className="cotype"> {position.minimum_salary}</span>
              <span className="cotype">
                {position.Relevant_work_experience} work experience
              </span>
            </div>
            <div className="applyorcancel">
              <Link to="" className="applyjob" onClick={applyJob}>
                Apply
              </Link>
              <Link to="" className="canceljob">
                Records
              </Link>
            </div>
            <div className="jobdetail text-center">
              <div>
                <span
                  className={
                    activeButton === 0 ? "alive" : ""
                  }
                  onClick={() => handleButtonClick(0)}
                >
                  <span>Job Description</span>
                </span>
              </div>
              <div>
                {" "}
                <span
                  className={activeButton === 1 ? "alive" : ""}
                  onClick={() => handleButtonClick(1)}
                >
                  <span>Company</span>
                </span>
              </div>
              <div>
                {" "}
                <span
                  className={activeButton === 2 ? "alive" : ""}
                  onClick={() => handleButtonClick(2)}
                >
                  <span>Other Opportunities</span>
                </span>
              </div>
            </div>
            {context && <div className="mt-3">{context}</div>}{" "}
          </div>
        )}
      </div>
    );
}