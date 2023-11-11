import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import flag from "./icons/En.svg";
import flagIR from "./icons/iranflag.png";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";


export default function Flag(props) {
    const [language, setLanguage] = useState("en");
    const { t, i18n } = useTranslation();


useEffect(() => {
  const storedLanguage = Cookies.get("language");

  if (storedLanguage) {
    setLanguage(storedLanguage);
    i18n.changeLanguage(storedLanguage);

    if (storedLanguage === "fa") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }
}, [i18n.language]);

function handleLanguageChange(newLanguage) {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);

    if (newLanguage === "fa") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }

    Cookies.set("language", newLanguage);
  }

return (
  <div>
    <Dropdown
      className={props.className}
      style={{ marginTop: "6%",  background: "transparent" }}
    >
      <Dropdown.Toggle variant="0 bg-0 boder-0" className="toggle">
        {language === "en" ? (
          <span className="Country">
            <img src={flag} height={22} alt="English flag" /> EN{" "}
          </span>
        ) : (
          <span className="Country">
            <img src={flagIR} height={22} alt="Persian flag" /> PR{" "}
          </span>
        )}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleLanguageChange("en")}>
          <img src={flag} height={22} alt="English flag" /> {t("English")}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange("fa")}>
          <img src={flagIR} height={22} alt="Persian flag" /> {t("فارسی")}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
);
}