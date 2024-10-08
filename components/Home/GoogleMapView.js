
import { LoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import React, { useContext, useEffect, useState } from 'react'
import { UserLocationContext } from '@/context/UserLocationContext';

function GoogleMapView() {
  const{userLocation, setUserLocation}=useContext(UserLocationContext);
  const containerStyle = {
    width: '100%',
    height: '70vh'
  };
  const coordinate = {
    lat: 14.42972,
    lng: 120.93667
  };


  return (
    
    <div>
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            mapId={'16b2c61749498632'}
       >
            <GoogleMap 
            mapContainerStyle={containerStyle}
            center= {userLocation}
            options={{mapId:'16b2c61749498632'}}
            zoom={15}
            >
              <MarkerF 
                position={userLocation}
                icon={{
                  url:'/marker.png',
                  scaledSize:{
                    width:50,
                    height:50,
                  }
                }}
               />
            </GoogleMap>
        </LoadScript>
    </div>  
  );
}

export default GoogleMapView;