import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";


const Home = () => {

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
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>

};

export default Home;
