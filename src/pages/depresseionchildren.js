import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import Filters from "./Filters";
import Doctors from "./Doctors";
import { useTranslation } from "react-i18next";
import { CgSortAz } from "react-icons/cg";

export default function Servicesforchildren() {
  const { i18n } = useTranslation();
  const [drInfo, setDrInfo] = useState([]);
  const [searchValue, setSearchValue] = useState("");
 const [filters, setFilters] = useState([]);
 const { specialty } = useParams();
const [checkedItems, setCheckedItems] = useState([]); 

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
  const url = "https://portals.mentalland.com/api/V1/homepage/top_rated_const_"+ lang;

  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const doctorsData = data.data.map((item, index) => {
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

  const fetchDoctors = () => {
    const lang = i18n.language;
    const url = "https://portals.mentalland.com/api/V1/homepage/consts_list_homepage_" + lang;   

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": lang,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const doctorsData = data.data.map((item, index) => {
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
    const newDrInfo = drInfo.filter(
      (value) =>
        value.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        value.lname.toLowerCase().includes(searchValue.toLowerCase()) ||
        value.madrak.toLowerCase().includes(searchValue.toLowerCase())
    );
    setDrInfo(newDrInfo);
  }, [searchValue]);

  return (
    <div className="full listofchpsy">
      <Header className="whatsapp" />
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
              <h1 className="Dep mb-5">Children Consultants </h1>
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
                checkedSpecialty={specialty ? specialty.toLowerCase() : checkedItems }
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

                  <div className="flexContainer hope">
                    <input
                      placeholder="Name..."
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
