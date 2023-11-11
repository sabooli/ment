import React from "react";
import businessimg from "../icons/Group 1251.png";
import Navbar from "../Navbar";
import Header from "../header";
import { Link } from "react-router-dom";
import adcou from "../icons/Group 971.png";
import teencou from "../icons/Group 972.png";
import jobpos from "../icons/Group 973.png";
import certificate from "../icons/Group 891.png";
import Footer from "../footer";


export default function Business() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url("${businessimg}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "calc(130vh - 50px)",
          }}
        >
          <Header className="linkedin isSpecialPage" />
          <Navbar />
          <div className="adbeexpert">
            <h1 className="adbeexpertheading">
              learning today, leading tomorrow{" "}
            </h1>
            <div className="adbeexpertwords">
              Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
              volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut
              vitae felis convallis. Egestas enim diam ac nisi orci id tellus
              lobortis. Lacus in etiam rhoncus.
            </div>
            <Link to="/pages/joinus" className="adbeexpertReg">
              <span>Resigter now</span>
            </Link>
          </div>
        </div>
        <div className="business">
          <div className="ourService">
            <h2>Our Services</h2>
            <div>
              <div className="triplet">
                <img src={adcou} className="img-fluid" alt="adult courses" />
              </div>
              <div className="triplet">
                <img
                  src={teencou}
                  className="img-fluid"
                  alt="children/teenager courses"
                />
              </div>
              <div className="triplet">
                <img
                  src={jobpos}
                  className="img-fluid"
                  alt="Job opportunities"
                />
              </div>
            </div>
          </div>

          <div className="text-center Bprog">
            <h2>Mentalland Business programs for you</h2>
            <div>
              Lorem ipsum dolor sit amet consectetur. Tincidunt mauris aliquam
              diam praesent dictumst vulputate rutrum. Curabitur nunc dolor
              habitasse nunc. Condimentum fames pharetra molestie mattis sit.
              Morbi nunc sed gravida risus suspendisse dolor neque. Ultrices
              auctor adipiscing mauris et enim egestas habitant fringilla duis.
              Sagittis amet etiam elementum ultricies velit turpis consequat.
              Duis risus eu urna ornare tincidunt enim eu sociis. Ultricies
              ornare quam nullam non eget massa nisl est. Etiam velit tempor
              imperdiet tristique blandit. Sed a consectetur lectus adipiscing
              lacus gravida egestas. Tellus ut consectetur donec tincidunt
              pellentesque consectetur quis placerat. Ut erat quis senectus
              faucibus pulvinar senectus. Lectus nam est dignissim viverra
              suspendisse id scelerisque aliquam lobortis. Non magnis pulvinar
              diam egestas.
            </div>
          </div>
          <div className="certificate">
            <div className="cerimg">
              <img src={certificate} className="img-fluid" alt="certificate" />
            </div>
            <div className="cerexp">
              <h3>Mentalland certificate</h3>
              <div>
                Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet
                sit bibendum habitant integer a commodo. Malesuada bibendum
                libero sodales vitae interdum leo posuere. Rhoncus tincidunt
                sociis proin proin sit in tortor tincidunt. Sed semper malesuada
                eget faucibus suspendisse diam quam eleifend. Vestibulum egestas
                ultrices leo ut. Fusce porttitor pellentesque at consectetur
                bibendum turpis. Eu condimentum aliquam auctor duis accumsan
                cursus tristique pellentesque lorem. Eget cras proin.
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}