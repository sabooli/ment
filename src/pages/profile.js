import React from "react";
import hiring from "../icons/Group 1103.png";

export default function Profile() {
    return (
      <div>
        <div className="profilepage">
          <div
            style={{
              backgroundColor: "#02979d",
              paddingTop: "25%",
              textAlign: "center"
            }}
          >
            <img
              src={hiring}
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50px",
                marginBottom: "5px",
              }}
              alt="profile"
            />
            <span
              style={{ color: "rgba(255, 255, 255, 1)" }}
            >
              <div className="welcomeBack">Welcome Back!</div>
              <div className="profileName">Sarah Smith</div>
            </span>
            <ul style={{ listStyleType: "none", textAlign: "start", fontFamily: "Gilroy-medium, sans-serif", fontSize: "0.98em", color: "rgba(255, 255, 255, 1)"}}>
                <li>
Personal Information
                </li>
                <li>Orders</li>
                <li>
My Courses
                </li>
                <li>Setting</li>
            </ul>
          </div>
          <div>Hello</div>
          <div>knjnm</div>
        </div>
      </div>
    );
}