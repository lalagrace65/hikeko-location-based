
import { LoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import React, { useContext, useEffect, useState } from 'react'


function GoogleMapView({}) {
  
  return (
    <div>
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            mapIds={['327f00d9bd231a33']}
       >
            
        </LoadScript>
    </div>
  )
}

export default GoogleMapView