import React, { useState } from 'react'
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '650px'
};

const location = {
    lat: 23.777,
    lng: 90.499
};


function Direction({origin, destination}) {
    const [directionResponse, setDirectionResponse] = useState(null);
    return (
        <LoadScript
            googleMapsApiKey='AIzaSyBJJpDwAZxirlTJos7iwa6rerSI4PBwqSA'
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={14}
            >
                {
                    origin !== '' && destination !== '' && <DirectionsService
                    // required
                    options={{
                      destination: destination,
                      origin: origin,
                      travelMode: 'WALKING'
                    }}
                    // required
                    callback={res => {
                        if(res !== null){
                          setDirectionResponse(res);
                        }
                    }}
                  />
                }
                {
                    directionResponse && <DirectionsRenderer
                    // required
                    options={{ 
                      directions: directionResponse
                    }}
                    
                  />
                }
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Direction)