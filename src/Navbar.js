import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RxHamburgerMenu } from "react-icons/rx";
import {MdKeyboardArrowDown} from "react-icons/md";


export default function Navbar() {
  const { t } = useTranslation();
  const [showNavbar, setShowNavbar] = useState(false);
 const [isOpen1, setIsOpen1] = useState(false);
 const [isOpen2, setIsOpen2] = useState(false);
 const [isOpen3, setIsOpen3] = useState(false);

const showDropdown1 = () => {
  setIsOpen1(true);
};
const hideDropdown1 = () => {
  setIsOpen1(false);
};

const showDropdown2 = () => {
  setIsOpen2(true);
};
const hideDropdown2 = () => {
  setIsOpen2(false);
};

const showDropdown3 = () => {
  setIsOpen3(true);
};
const hideDropdown3 = () => {
  setIsOpen3(false);
};
 const handleShowNavbar = () => {
  setShowNavbar(!showNavbar);
};

  return (
    <nav className="navbar nav">
      <h1 className="logo">MentalLand</h1>
      <div className="menu-icon">
        <RxHamburgerMenu className="hamburger" onClick={handleShowNavbar} />
      </div>
      <div className={`nav-elements nav-right  ${showNavbar && "active"}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#02979d" : "#000b0c",
                background: isActive ? "#ecf7f7" : "#ecf7f7",
              })}
            >
              {t("Home")}
            </NavLink>
          </li>
          <li className="submenu">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#02979d" : "#000b0c",
                background: isActive ? "#ecf7f7" : "#ecf7f7",
              })}
              className="dropdown"
            >
              {t("OurServices")} <MdKeyboardArrowDown />
            </NavLink>
            <div className="dropdown-content">
              <NavLink
                to="/pages/psychology"
                onMouseEnter={showDropdown1}
                onMouseLeave={hideDropdown1}
              >
                {t("Psychology")}
                {isOpen1 && (
                  <div className="dropdown-content">
                    <ul className="branch">
                      <li>
                        <NavLink
                          to="/pages/psychologyAdults"
                          style={{ fontSize: "14px" }}
                        >
                          {t("PsychologyAdults")}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/pages/psychologyChildren"
                          style={{ fontSize: "14px" }}
                        >
                          {t("PsychologyChildren")}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/pages/seminars"
                          style={{ fontSize: "14px" }}
                        >
                          {t("Seminars")}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/pages/depressionadults"
                          style={{ fontSize: "14px" }}
                        >
                          {t("PsychologistsAdults")}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/pages/depressionchildren"
                          style={{ fontSize: "14px" }}
                        >
                          {t("PsychologistsChildren")}
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </NavLink>
              <NavLink
                to="/pages/art"
                onMouseEnter={showDropdown2}
                onMouseLeave={hideDropdown2}
              >
                {t("Art")}
                {isOpen2 && (
                  <div className="dropdown-content">
                    <ul className="branch">
                      <li>
                        <NavLink
                          to="/pages/artadults"
                          style={{ fontSize: "14px" }}
                        >
                          {t("ArtAdults")}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/pages/musicadults"
                          style={{ fontSize: "14px" }}
                        >
                          {t("MusicAdults")}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/pages/adultcoaches"
                          style={{ fontSize: "14px" }}
                        >
                          {t("CoachesAdults")}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/pages/artchildren"
                          style={{ fontSize: "14px" }}
                        >
                          {t("ArtChildren")}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/pages/musicchildren"
                          style={{ fontSize: "14px" }}
                        >
                          {t("MusicChildren")}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/pages/childrencoaches"
                          style={{ fontSize: "14px" }}
                        >
                          {t("CoachesChildren")}
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </NavLink>
              <NavLink
                to="/pages/business"
                onMouseEnter={showDropdown3}
                onMouseLeave={hideDropdown3}
              >
                {t("Business")}
              {isOpen3 && ( <div className="dropdown-content">
                  <ul className="branch">
                    <li>
                      <NavLink
                        to="/pages/businessadults"
                        style={{ fontSize: "14px" }}
                      >
                        {t("BusinessForAdults")}
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink
                        to="/pages/businesschildren"
                        style={{ fontSize: "14px" }}
                      >
                        {t("BusinessForChildren")}
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink
                        to="/pages/jobopportunities"
                        style={{ fontSize: "14px" }}
                      >
                        {t("JobOpportunities")}
                      </NavLink>
                    </li>
                  </ul>
                </div>)}
              </NavLink>
              <NavLink to="/pages/tourism">{t("Tourism")}</NavLink>
            </div>
          </li>
          <li className="submenu">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#02979d" : "#000b0c",
                background: isActive ? "#ecf7f7" : "#ecf7f7",
              })}
              className="dropdown"
            >
              {t("About")} <MdKeyboardArrowDown />
            </NavLink>
            <div className="dropdown-content">
              <NavLink to="/pages/aboutus">{t("AboutUs")}</NavLink>

              <NavLink to="/pages/positions">{t("Positions")}</NavLink>

              <NavLink to="/pages/joinus">{t("JoinUs")}</NavLink>
            </div>
          </li>
          <li>
            <NavLink
              to="/pages/contactus"
              style={({ isActive }) => ({
                color: isActive ? "#02979d" : "#000b0c",
                background: isActive ? "#ecf7f7" : "#ecf7f7",
              })}
            >
              {t("Contact")}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
