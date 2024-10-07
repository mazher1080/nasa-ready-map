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
        {/* <Circle
          center={{lat: 47.56, lng: -52.709}}
          radius={1500}
          options={{strokeColor: "#ff0000"}}
          
        /> */}
        <Marker
          onClick={() => {
            setDisplayBox(!displayBox)
          }}
          position={{lat: 47.104, lng: -55.194}}
        />
        <Marker
          onClick={() => {
            setDisplayBox(!displayBox)
          }}
          position={{lat: 47.725, lng: -53.226}}
        />
        <Marker
          onClick={() => {
            setDisplayBox(!displayBox)
          }}
          position={{lat: 48.93398, lng: -55.644}}
        />
        <Marker
          onClick={() => {
            setDisplayBox(!displayBox)
          }}
          position={{lat: 51.3623, lng: -55.58668}}
        />
        <Marker
          onClick={() => {
            setDisplayBox(!displayBox)
          }}
          position={{lat: 48.165, lng: -53.98441}}
        />
        <Marker
          onClick={() => {
            setDisplayBox(!displayBox)
          }}
          position={{lat: 48.95604, lng: -54.62857}}
        />
        <Marker
          onClick={() => {
            setDisplayBox(!displayBox)
          }}
          position={{lat: 47.57249, lng: -52.72169}}
        />
        <Marker
          onClick={() => {
            setDisplayBox(!displayBox)
          }}
          position={{lat: 53.29611, lng: -60.33787}}
        />
        <Marker
          onClick={() => {
            setDisplayBox(!displayBox)
          }}
          position={{lat: 48.55937, lng: -58.553}}
        />
        <Marker
          onClick={() => {
            setDisplayBox(!displayBox)
          }}
          position={{lat: 47.55767, lng: -52.7217}}
        />
        <Marker
          onClick={() => {
            setDisplayBox(!displayBox)
          }}
          position={{lat: 47.57599, lng: -52.695}}
        />
        <Marker
          onClick={() => {
            setDisplayBox(!displayBox)
          }}
          position={{lat: 47.57123, lng: -52.7428}}
        />
        <Marker
          onClick={() => {
            setDisplayBox(!displayBox)
          }}
          position={{lat: 47.52881, lng: -52.7497}}
        />
        <Marker
          onClick={() => {
            setDisplayBox(!displayBox)
          }}
          position={{lat: 48.948, lng: -57.930}}
        />
        <Marker
          onClick={() => {
            setDisplayBox(!displayBox)
          }}
          position={{lat: 52.949, lng: -66.936}}
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
