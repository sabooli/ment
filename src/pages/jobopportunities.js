import React, { useState, useEffect } from "react";
import job from "../icons/Group 1255 (1).png";
import Header from "../header";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Footer from "../footer";
import Form from "react-bootstrap/Form";
import Position from "./position";
import Positioninfo from "./PositionInfo";
import { useTranslation } from "react-i18next";

export default function Jobopp() {
  const [positionInfo, setPositionInfo] = useState(null);
  const [businesses, setBusinesses] = useState([]);
  const { i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [type, setType] = useState("");
  const [experince, setExperince] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [countries, setCountries] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const [countryId, setCountryId] = useState();
  const positionsPerPage = 3;

  const jobsToMap =
    filteredJobs.length > 0
      ? filteredJobs
      : selectedJobs.lenght > 0
      ? selectedJobs
      : businesses;

  const fetchSearchJob = () => {
    const requestBody = {
      category_id: categoryId,
      country_id: countryId,
    };

    fetch("https://portals.mentalland.com/api/V1/homepage/search_adverting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
          console.log("Response data:", data);
        setSelectedJobs(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const countryUrl =
    "https://portals.mentalland.com/api/V1/homepage/countries_list";

  useEffect(() => {
    fetch(countryUrl)
      .then((response) => response.json())
      .then((data) => setCountries(data.data));
  }, [countryUrl]);

  const categoryUrl =
    "https://portals.mentalland.com/api/V1/homepage/adverting_category";

  useEffect(() => {
    fetch(categoryUrl)
      .then((response) => response.json())
      .then((data) => setCategories(data.data));
  }, [categoryUrl]);

  useEffect(() => {
    if (type || experince) {
      fetchJobs();
    }
  }, [type, experince]);

  const fetchJobs = () => {
    const requestBody = {
      type: type,
      experince: experince,
    };

    fetch(
      "https://portals.mentalland.com/api/V1/homepage/fillter_adversting_list",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to join. Please try again later.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);

        if (data && Array.isArray(data.data) && data.data.length > 0) {
          setFilteredJobs(data.data);
          console.log("Got the data:", data.data);
        } else {
          console.log(
            "Data is empty or doesn't have the 'data' property with valid content:",
            data
          );
        }
      });
  };

  const dataSubset = jobsToMap.slice(
    (currentPage - 1) * positionsPerPage,
    currentPage * positionsPerPage
  );

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleBoxClick = (positionData) => {
    setPositionInfo(positionData);
  };

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
          backgroundImage: `url("${job}")`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          height: "calc(130vh - 50px)",
        }}
      >
        <Header className="linkedin isSpecialPage" />
        <Navbar />
        <div className={i18n.language === "en" ? "jobM" : "jobMF"}>
          <h1 className="jobH">
            Get your <br />
            dream job <br /> today
          </h1>
          <div className="jobT">
            Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
            volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut
            vitae felis convallis.
          </div>
          <div className="jobL">
            <Link to="/" className="jobBR">
              <span className="BResume">Build Resume</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="jobchoose">
        <div className="selecting">
          {" "}
          <div>What</div>
          <Form>
            <Form.Select
              aria-label="wid"
              onChange={(event) => setCategoryId(event.target.value)}
            >
              <option>Select the Category...</option>
              {categories &&
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}{" "}
            </Form.Select>
          </Form>
        </div>

        <div className="selecting">
          <div>Where</div>
          <Form.Select
            aria-label="wid"
            onChange={(event) => setCountryId(event.target.value)}
          >
            <option value="">Country...</option>
            {countries &&
              countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {i18n.language === "en" ? country.name : country.name_fa}
                </option>
              ))}
          </Form.Select>
        </div>
        <div className="jobsearch">
          <Link className="jobsearchT" onClick={fetchSearchJob}>
            Search jobs{" "}
          </Link>
        </div>
      </div>
      <div className="jobopportunitieslist">
        <div className="jobfilters">
          <Form.Select
            className="formselect"
            aria-label="Disabled select example"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option className="text-center d-none">Job Type</option>
            <option>Remote</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
          </Form.Select>

          <Form.Select
            className="formselect"
            aria-label="Disabled select example"
            value={experince}
            onChange={(event) => setExperince(event.target.value)}
          >
            <option className="text-center d-none">Experince</option>
            <option>None</option>
            <option>1-3 Year</option>
            <option>More than 3 Years</option>
          </Form.Select>
        </div>
        <div className="alive mb-4">
          <strong>{jobsToMap.length} Job Opportunities</strong>
        </div>
        <div>
          <div className={positionInfo ? "Positionslistanddetail" : ""}>
            <div
              className={positionInfo ? "positiondisplay" : "positionnotdetail"}
            >
              {dataSubset.map((business) => (
                <div key={business.id}>
                  {" "}
                  <Position business={business} onClick={handleBoxClick} />{" "}
                </div>
              ))}
            </div>
            {positionInfo ? (
              <div className="mb-5">
                <Positioninfo position={positionInfo} />
              </div>
            ) : null}
          </div>
        </div>
        <div>
          {Array.from(
            { length: Math.ceil(jobsToMap.length / positionsPerPage) },
            (_, index) =>
              (index < 5 ||
                index ===
                  Math.ceil(jobsToMap.length / positionsPerPage) - 1) && (
                <button
                  key={index + 1}
                  onClick={() => goToPage(index + 1)}
                  disabled={currentPage === index + 1}
                  className={
                    index === 1 && jobsToMap.length / positionsPerPage > 5
                      ? "pageDot"
                      : currentPage === index + 1
                      ? "activePage"
                      : "pageNumber"
                  }
                >
                  {index === 1 && jobsToMap.length / positionsPerPage > 5
                    ? "..."
                    : index + 1}
                </button>
              )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
