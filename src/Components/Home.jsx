import { GoogleMap, useJsApiLoader, Circle, Marker, OverlayView } from "@react-google-maps/api";
import React, { useEffect, useState } from "react"

const displayBoxStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15
}

const fireWarningURL = "https://api.meteomatics.com/2024-10-06T00:00:00Z/forest_fire_warning:idx/83.3362128,-141.00275_41.6765597,-52.3237664:0.07,0.07/png"

const Home = () => {
  const [displayBox, setDisplayBox] = useState(false);
  const containerStyle = {
    width: '1000px',
    height: '700px'
  };

  const center = {
    lat: 47.56494,
    lng: -52.70931
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAbgg5uwWxwaNDLdbE2xwCPEPiJarmiiDk'
  });

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Circle
          center={{lat: 47.56, lng: -52.709}}
          radius={1500}
          options={{strokeColor: "#ff0000"}}
          
        />
        <Marker
          onClick={() => {
            setDisplayBox(!displayBox)
          }}
          position={{lat: 47, lng: -51}}
        />
        {displayBox && 
          <OverlayView
            position={{lat: 47, lng: -51}}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
          <div style={displayBoxStyle}>
            <h3>Location: </h3>
          </div>
          </OverlayView>}
        <OverlayView
          mapPaneName={OverlayView.OVERLAY_LAYER}
          position={{lat: 70, lng: -160}}
        >
          <img src={fireWarningURL} />
        </OverlayView>
      </GoogleMap>
  ) : <></>

};

export default Home;
