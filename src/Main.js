import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import About from "./pages/aboutus";
import Contact from "./pages/contactus";
import Services from "./pages/depressionadults";
import Home from "./pages/Home";
import Counsel from "./pages/consultantadults";
import Psychology from "./pages/psychology";
import Seminar from "./pages/seminar";
import Psyadults from "./pages/psychologyAdults";
import Psychildren from "./pages/psychologyChildren";
import Seminars from "./pages/seminars";
import Upcoming from "./pages/upcoming";
import Patientcomments from "./pages/patientcomments";
import Consultants from "./pages/consultants";
import Teamslider from "./pages/teamslider";
import Artadults from "./pages/artadults";
import Art from "./pages/art";
import Coaches from "./pages/coaches";
import Adultcoaches from "./pages/adultcoaches";
import Childrencoaches from "./pages/childrencoaches";
import Artchildren from "./pages/artchildren";
import Musicadults from "./pages/musicadults";
import Musicchildren from "./pages/musicchildren";
import Servicesforchildren from "./pages/depresseionchildren";
import Seminarreg from "./pages/seminarreg";
import Courseinfo from "./pages/courseinfo";
import Courseinfoch from "./pages/courseinfoch";
import Businessadults from "./pages/businessadults";
import Position from "./pages/position";
import Businesschildren from "./pages/businesschildren";
import Business from "./pages/business";
import Positions from "./pages/positions";
import Openrole from "./pages/openRole";
import Joinus from "./pages/joinus";
import Jobopp from "./pages/jobopportunities";
import Positioninfo from "./pages/PositionInfo";
import Tourism from "./pages/tourism";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Map from "./pages/map";
import Signup from "./pages/signup";
import Header from "./header";
import Navbar from "./Navbar";
import Footer from "./footer";
import ScrollToTop from "./scrollToTop";


export default function Main() {
 
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="header" element={<Header />} />
        <Route path="Navbar" element={<Navbar />} />
        <Route path="footer" element={<Footer />} />
        <Route path="/pages" element={<Outlet />}>
          <Route path="depressionadults/:specialty?" element={<Services />} />
          <Route path="depressionchildren/:specialty?" element={<Servicesforchildren />} />
          <Route path="aboutus" element={<About />} />
          <Route path="contactus" element={<Contact />} />
          <Route path="consultantadults/:id" element={<Counsel />} />
          <Route path="psychology" element={<Psychology />} />
          <Route path="seminar" element={<Seminar />} />
          <Route path="psychologyAdults" element={<Psyadults />} />
          <Route path="psychologyChildren" element={<Psychildren />} />
          <Route path="seminars" element={<Seminars />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="patientcomments" element={<Patientcomments />} />
          <Route path="consultants" element={<Consultants />} />
          <Route path="teamslider" element={<Teamslider />} />
          <Route path="art" element={<Art />} />
          <Route path="artadults" element={<Artadults />} />;
          <Route path="coaches" element={<Coaches />} />
          <Route path="adultcoaches" element={<Adultcoaches />} />
          <Route path="artchildren" element={<Artchildren />} />;
          <Route path="childrencoaches" element={<Childrencoaches />} />
          <Route path="musicadults" element={<Musicadults />} />
          <Route path="musicchildren" element={<Musicchildren />} />
          <Route path="courseinfo/:id" element={<Courseinfo />} />
          <Route path="courseinfoch/:id" element={<Courseinfoch />} />
          <Route path="businessadults" element={<Businessadults />} />
          <Route path="businesschildren" element={<Businesschildren />} />
          <Route path="map" element={<Map />} />
          <Route path="position" element={<Position />} />
          <Route path="business" element={<Business />} />
          <Route path="positions" element={<Positions />} />
          <Route path="openRole" element={<Openrole />} />
          <Route path="joinus" element={<Joinus />} />
          <Route path="jobopportunities" element={<Jobopp />} />
          <Route path="positionInfo" element={<Positioninfo />} />
          <Route path="tourism" element={<Tourism />} />
          <Route path="seminarreg/:id" element={<Seminarreg />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
