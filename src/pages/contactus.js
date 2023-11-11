import React from "react";
import Navbar from "../Navbar";
import Header from "../header";
import Footer from "../footer";
import cube from "../icons/Rectangle 45-.png";
import emailus from "../icons/Groupemail.svg";
import callus from "../icons/Groupcall.svg";
import media from "../icons/Groupmedia.svg";
import NeshanMap from "../Map/Map";

export default function Contact() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("${cube}")`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          height: "calc(130vh - 50px)",
        }}
      >
        <Header className="twitter isSpecialPage" />
        <Navbar />
        <div className="text-center">
          <h1 className="contactus">Contact us</h1>
          <h2 className="waitu">
            Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
            volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut
            vitae felis convallis. Egestas enim diam ac nisi orci id tellus
            lobortis. Lacus in etiam rhoncus.{" "}
          </h2>
        </div>
      </div>
      <div className="contactMethods">
        <figure>
          <img src={emailus} alt="email us" />
          <figcaption className="text-center footnote">Email Us</figcaption>
          <figcaption className="text-center addressnote">
            mentalland@gmail.com
          </figcaption>
        </figure>
        <figure>
          <img src={callus} alt="email us" />
          <figcaption className="text-center footnote">Call Us</figcaption>
          <figcaption className="text-center addressnote">
            0098211234567
          </figcaption>
        </figure>
        <figure>
          <img src={media} alt="email us" />
          <figcaption className="text-center footnote">
            Follow Us on social media
          </figcaption>
          <figcaption className="text-center addressnote">
            mentalland{" "}
          </figcaption>
        </figure>
      </div>
      <div>
        <NeshanMap />
      </div>
      <div className="subscribe">
        <div>
          <div className="newsletter">Subscribe to our newsletter</div>
          <div className="ourNewsletter">
            Lorem ipsum dolor sit amet consectetur. Nunc pharetra massa velit
            consectetur lectus erat.
          </div>{" "}
        </div>
        <div className="emailInput">
          <input
            placeholder="Email address"
            className="emailplace"
            type="email"
          />
          <button type="submit" className="subbutton">
            Subscribe
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
