import React, { useMemo } from "react";
import { GoogleMap } from "@react-google-maps/api";

export default function Map() {
  const center = useMemo(() => ({ lat: 35.76574, lng: 51.36158 }), []);
  return (
    <GoogleMap
      zoom={16}
      center={center}
      mapContainerClassName="map-container"
    ></GoogleMap>
  );
}
