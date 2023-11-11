import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Coaches from "./coaches";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";

export default function Childrencoaches() {
  const [paintCoaches, setPaintCoaches] = useState([]);
  const [danceCoaches, setDanceCoaches] = useState([]);
  const [writeCoaches, setWriteCoaches] = useState([]);
  const [actCoaches, setActCoaches] = useState([]);
  const [musicCoaches, setMusicCoaches] = useState([]);
  const { t, i18n } = useTranslation();

  const paintUrl = t("paintUrl");
  const musicUrl = t("musicUrl");
  const danceUrl = t("danceUrl");
  const writeUrl = t("writeUrl");  
  const actUrl = t("actUrl");

  
useEffect(() => {
  fetch(actUrl)
    .then((response) => response.json())
    .then((data) => setActCoaches(data.data));
}, [actUrl]);

useEffect(() => {
  setActCoaches([]);
  fetch(actUrl)
    .then((response) => response.json())
    .then((data) => setActCoaches(data.data));
}, [i18n.language]);

useEffect(() => {
  fetch(musicUrl)
    .then((response) => response.json())
    .then((data) => setMusicCoaches(data.data));
}, [musicUrl]);

useEffect(() => {
  setMusicCoaches([]);
  fetch(musicUrl)
    .then((response) => response.json())
    .then((data) => setMusicCoaches(data.data));
}, [i18n.language]);

useEffect(() => {
  fetch(writeUrl)
    .then((response) => response.json())
    .then((data) => setWriteCoaches(data.data));
}, [writeUrl]);

useEffect(() => {
  setWriteCoaches([]);
  fetch(writeUrl)
    .then((response) => response.json())
    .then((data) => setWriteCoaches(data.data));
}, [i18n.language]);

useEffect(() => {
  fetch(danceUrl)
    .then((response) => response.json())
    .then((data) => setDanceCoaches(data.data));
}, [danceUrl]);

useEffect(() => {
  setDanceCoaches([]);
  fetch(danceUrl)
    .then((response) => response.json())
    .then((data) => setDanceCoaches(data.data));
}, [i18n.language]);

useEffect(() => {
  fetch(paintUrl)
    .then((response) => response.json())
    .then((data) => setPaintCoaches(data.data));
}, [paintUrl]);

useEffect(() => {
  setPaintCoaches([]);
  fetch(paintUrl)
    .then((response) => response.json())
    .then((data) => setPaintCoaches(data.data));
}, [i18n.language]);
  


 
  return (
    <div className="backcolor">
      <Header className="instagram" />
      <Navbar />
      <div className="choosecoach-child">
        <Coaches
          coachData={paintCoaches}
          heading="Paint Coach"
          major="Painting"
        />
        <Coaches coachData={musicCoaches} heading="Music Coach" major="Music" />
        <Coaches
          coachData={danceCoaches}
          heading="Dance Coach"
          major="Dancing"
        />
        <Coaches coachData={actCoaches} heading="Acting Coach" major="Acting" />
        <Coaches
          coachData={writeCoaches}
          heading="Writing Coach"
          major="Writing"
        />
      </div>
      <Footer />
    </div>
  );
}
