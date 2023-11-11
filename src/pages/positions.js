import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import hiring from "../icons/Group 1103.png";
import Openrole from "./openRole";
import Positioninfo from "./PositionInfo";
import { useTranslation } from "react-i18next";


export default function Positions() {
  const [businesses, setBusinesses] = useState([]);
  const [role, setRole] = useState([]);
  const [modalIsOpen,setModalIsOpen] = useState(false);
  const { i18n } = useTranslation();

  
const handleRoleClick = (positionData) => {
  setRole(positionData);
 
setModalIsOpen(true);
}

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
      <Header className="twitter" />
      <Navbar />
      <div className="hiringpage">
        <div className="hiring">
          <div>
            <h1>We're hiring</h1>
            <div className="hiringtext">
              Lorem ipsum dolor sit amet consectetur. Nunc pharetra massa velit
              consectetur lectus erat. Tincidunt dis egestas aliquet adipiscing
              donec. Sed cras vulputate amet scelerisque. Varius etiam enim
              velit arcu arcu eget. Nunc a quis enim nibh posuere cras aenean
              purus. Nulla sagittis semper cum rhoncus varius quis vitae
              venenatis nibh. Senectus fames quisque porta vitae facilisis
              commodo consequat. Feugiat enim odio in sed condimentum. Id et
              purus est risus. . Tincidunt dis egestas aliquet adipiscing donec.
              Sed cras vulputate amet scelerisque.
            </div>
          </div>
          <div className="hiringimg">
            <img
              src={hiring}
              className="img-fluid"
              alt="hiring in mentalland"
            />
          </div>{" "}
        </div>
        <div className="openRoles">
          <h2 className="text-center">open roles in mentalland</h2>
          <div className="openRolebar">
            {businesses &&
              businesses.slice(0, 6).map((business) => (
                <div key={business.id}>
                  <Openrole business={business} onClick={handleRoleClick} />
                </div>
              ))}
            <ReactModal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
            >
              <Positioninfo position={role} />
            </ReactModal>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
