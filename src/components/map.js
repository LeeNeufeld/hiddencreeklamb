import React from "react";

import { StaticGoogleMap, Marker } from "react-static-google-map";

function Map() {
  return (
    <StaticGoogleMap
      center="46.4651281, -122.7300192"
      size="250x250"
      className="img-fluid"
      apiKey="AIzaSyCk59-nRyauZ1S0qPz24vZWA6-nPWmrPtk"
      zoom="17"
      maptype="hybrid"
    >
      <Marker location="46.4651281, -122.7300192" size="normal" label="R" />
    </StaticGoogleMap>
  );
}

export default Map;
