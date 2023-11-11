import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineWhatsapp } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import FootBack from "./icons/Frame 14.png";

export default function Footer() {
  return (
    <footer className="CompInfo">
      <div>
        <div
          className="main-container"
          style={{
            position: "relative",
            backgroundColor: "#02979D",
          }}
        >
          <div className="column summary">
            <h1 className="fh1">MentalLand</h1>
            <div className="ftext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="fcalls">
              <MdOutlineWhatsapp className="facebook" />
              <CiLinkedin className="facebook" />
              <IoLogoInstagram className="facebook" />
              <TiSocialFacebook className="facebook" />
              <TiSocialTwitter className="facebook" />
            </div>
          </div>
          <div className="column first">
            <div className="fh2">WRITE US</div>
            <div className="fname">
              Name
              <input type="full name" className="formn" autoComplete="off" />
            </div>

            <div className="femail">
              Email
              <input type="full name" className="forme" autoComplete="off" />
            </div>

            <div className="fmessage">
              Message
              <textarea type="full name" className="formm" autoComplete="off" />
            </div>

            <button className="fsmessage">
              <div className="fbt">Send Message</div>
            </button>
          </div>
          <div
            className="column web"
            style={{
              zIndex: 1,
            }}
          >
            <div className="inner-column">
              <div className="fh22">Quick Access</div>
              <Link to="/" className="fqaccess fhome">
                Home
              </Link>
              <br />
              <Link to="/pages/psychology" className="fqaccess">
                Our Services
              </Link>
              <br />
              <Link to="/pages/aboutus" className="fqaccess">
                About
              </Link>
              <br />
              <Link to="/pages/contactus" className="fqaccess">
                Contact Us
              </Link>
              <br />
              <Link to="/pages/contactus" className="fqaccess">
                Articles
              </Link>
            </div>
            <div className="inner-column">
              <div className="fh22">Helpful Links</div>
              <Link to="/pages/aboutus" className="fqaccess fhome">
                Link 1
              </Link>
              <br />
              <Link to="/pages/art" className="fqaccess">
                Link 2
              </Link>
              <br />
              <Link to="/pages/business" className="fqaccess">
                Link 3
              </Link>
              <br />
              <Link to="/pages/tourism" className="fqaccess">
                Link 4
              </Link>
              <br />
              <Link to="/pages/psychology" className="fqaccess">
                Link 5
              </Link>
            </div>
            <div className="bottom">
              copyright © 2023 mentalland team. All rights reserved.
            </div>
            <div
              style={{
                backgroundImage: `url("${FootBack}")`,
                backgroundRepeat: "no-repeat",
                position: "absolute",
                backgroundSize: "cover",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 0,
                opacity: 0.1,
                transform: "scaleX(-1)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </footer>
  );
}