import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import Filters from "./Filters";
import Doctors from "./Doctors";
import SearchResultsPopup from "./popup";
import { useTranslation } from "react-i18next";
import { CgSortAz } from "react-icons/cg";

export default function Services() {
  const { i18n } = useTranslation();
  const [drInfo, setDrInfo] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filters, setFilters] = useState([]);
  const { specialty } = useParams();
  const [filteredConsts, setFilteredConsts] = useState([]);
  const [showResultsPopup, setShowResultsPopup] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]); 

  const handleSearchQueryChange = (newSearchQuery) => {
    const filteredConsts = drInfo.filter((doctor) => {
      return doctor.name.toLowerCase().includes(newSearchQuery.toLowerCase());
    });

    setFilteredConsts(filteredConsts);
    setShowResultsPopup(true);
  };

  const handleCloseResultsPopup = () => {
    setShowResultsPopup(false);
  };

  const selectedSpecialty = specialty || "";

  const filteredDoctors = drInfo
    .filter((doctor) => {
      const specialties = doctor.expertise.map((specialty) =>
        specialty.toLowerCase()
      );
      const hasSelectedSpecialty =
        selectedSpecialty === "" ||
        specialties.includes(selectedSpecialty.toLowerCase());

      const filteredItems =
        filters.length === 0 ||
        doctor.expertise.some((specialty) =>
          filters.includes(specialty.toLowerCase())
        );
      return hasSelectedSpecialty && filteredItems;
    });

 const clickFunction = (value) => {
  const newCheckedItems = checkedItems.includes(value)
    ? checkedItems.filter((item) => item !== value)
    : [...checkedItems, value];
  setCheckedItems(newCheckedItems);
  setFilters(newCheckedItems);
};

  useEffect(() => {
    fetchTopRatedDoctors();
  }, []);

  const fetchTopRatedDoctors = () => {
    const lang = i18n.language;
    const url =
      "https://portals.mentalland.com/api/V1/homepage/top_rated_const_" + lang;

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": lang,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const doctorsData = data.data.map((item) => {
          return {
            id: item.id,
            name: item.Fname,
            lname: item.Lname,
            star: item.stars,
            madrak: item.type_madrak,
            expertise: JSON.parse(item.Specialties),
            image: `https://portals.mentalland.com/image/users/cons/degree/${item.avatar}`,
          };
        });
        setDrInfo(doctorsData);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchTopRatedDoctors();
  }, [i18n.language]);

  const fetchDoctors = () => {
    const url =
      "https://portals.mentalland.com/api/V1/homepage/consts_list_homepage_" +
      i18n.language;

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": i18n.language,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const doctorsData = data.data.map((item) => {
          return {
            id: item.id,
            name: item.Fname,
            lname: item.Lname,
            star: item.stars,
            madrak: item.type_madrak,
            expertise: JSON.parse(item.Specialties),
            image: `https://portals.mentalland.com/image/users/cons/degree/${item.avatar}`,
          };
        });
        setDrInfo(doctorsData);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchDoctors();
  }, [i18n.language]);

  useEffect(() => {
    const newDrInfo = drInfo.filter((value) => {
      const fullName = `${value.name} ${value.lname}`;
      const searchValueLowerCase = searchValue.toLowerCase();

      return (
        fullName.toLowerCase().includes(searchValueLowerCase) ||
        value.madrak.toLowerCase().includes(searchValueLowerCase)
      );
    });

    setDrInfo(newDrInfo);
  }, [searchValue]);

  return (
    <div className="full">
      <Header
        className="whatsapp"
        onSearchQueryChange={handleSearchQueryChange}
      />
      {showResultsPopup && (
        <SearchResultsPopup
          results={filteredConsts}
          onClose={handleCloseResultsPopup}
          filteredConsts={filteredConsts}
        />
      )}
      <Navbar />
      <div className="containerFluid">
        <div className="maincontent">
          {specialty ? (
            <>
              <h1 className="Dep">{specialty} </h1>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
            </>
          ) : (
            <>
              <h1 className="Dep mb-5">Adults Consultants </h1>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
            </>
          )}
          <div className="main">
            <section className="check">
              <Filters
                clickFunction={clickFunction}
                checkedSpecialty={specialty ? specialty.toLowerCase() : checkedItems}
              />
            </section>
            <section className="psychologist">
              <div className="threeitems">
                <div className="normal">
                  <button className="top">
                    <div className="Trated" onClick={fetchTopRatedDoctors}>
                      <CgSortAz className="Trated" />
                      Top rated
                    </div>
                  </button>
                  <div className="flexContainer">
                    <input
                      placeholder="Write the Name..."
                      className="phname"
                      type="text"
                      onChange={(e) => setSearchValue(e.target.value)}
                      value={searchValue}
                    />
                    <button type="submit" className="find">
                      <span className="fitext">Search</span>
                    </button>
                  </div>
                  <div className="number" onClick={fetchDoctors}>
                    740 Psychologists
                  </div>
                </div>{" "}
              </div>
              {filteredDoctors.map((item) => {
                return (
                  <div key={item.id}>
                    <Doctors info={item} />
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
}
