import { Fragment } from "react";
import Adress from "./Adress";
import NeshanMap from "./Map";

const Map = () => {
    return (
      <Fragment>
        <Adress />
        <NeshanMap
          options={{
            key: "web.F0lx0ByUPF3E4UQ0ou6TKcfrT1guDYilNeLUG7Em",
            center: [35.76574, 51.36158],
            zoom: 15,
          }}
          onInit={(L, myMap) => {
            let marker = L.marker([35.76574, 51.36158])
              .addTo(myMap)
              .bindPopup("ما اینجا هستیم.");

            // myMap.on('click', function (e) {
            //     marker.setLatLng(e.latlng)
            // });

            L.circle([35.76574, 51.36158], {
              color: "red",
              fillColor: "#f03",
              fillOpacity: 0.2,
              radius: 500,
            }).addTo(myMap);
          }}
        />
      </Fragment>
    );
};

export default Map;
