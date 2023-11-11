import React, { useEffect, useRef } from "react";
import neshan_map_loader from "./loaders/neshan_map_loader";

const NeshanMap = (props) => {
  const { style, options, onInit } = props;
  const mapEl = useRef(null);

  const defaultStyle = {
    width: "100%",
    height: "350px",
    margin: 0,
    padding: 0,
    background: "#eee",
  };

  const defaultOptions = {
    key: "web.F0lx0ByUPF3E4UQ0ou6TKcfrT1guDYilNeLUG7Em",
    maptype: "dreamy",
    poi: true,
    traffic: false,
    center: [35.76574, 51.36158],
    zoom: 14,
  };

  useEffect(() => {
    neshan_map_loader({
      onLoad: () => {
        let map = new window.L.Map(mapEl.current, { ...defaultOptions, ...options });
        if (onInit) onInit(window.L, map);
      },
      onError: () => {
        console.error("Neshan Maps Error: This page didn't load Neshan Maps correctly");
      },
    });
  }, []);

  return <div ref={mapEl} style={{ ...defaultStyle, ...style }} />;
};

export default NeshanMap;
