import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const location = {
  lat: 23.777,
  lng: 90.499
};

const onLoad = marker => {
  console.log('marker:', marker)
 }

const Map= ()=>{

  
   
  return (
    <LoadScript

      googleMapsApiKey="AIzaSyBJJpDwAZxirlTJos7iwa6rerSI4PBwqSA"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
      >
        <Marker
      onLoad={onLoad}
      position={location}
    />
      
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)


