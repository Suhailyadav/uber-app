// import React, { useState, useEffect } from 'react'
// import { LoadScript, GoogleMap, MarkerF, DirectionsService, DirectionsRenderer } from '@react-google-maps/api'

// const containerStyle = {
//     width: '100%',
//     height: '100%',
// };

// const center = {
//     lat: -3.745,
//     lng: -38.523
// };

// const LiveTracking = () => {
//     const [ currentPosition, setCurrentPosition ] = useState(center);

//     useEffect(() => {
//         navigator.geolocation.getCurrentPosition((position) => {
//             const { latitude, longitude } = position.coords;
//             setCurrentPosition({
//                 lat: latitude,
//                 lng: longitude
//             });
//         });

//         const watchId = navigator.geolocation.watchPosition((position) => {
//             const { latitude, longitude } = position.coords;
//             setCurrentPosition({
//                 lat: latitude,
//                 lng: longitude
//             });
//         });

//         return () => navigator.geolocation.clearWatch(watchId);
//     }, []);

//     useEffect(() => {
//         const updatePosition = () => {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 const { latitude, longitude } = position.coords;

//                 console.log('Position updated:', latitude, longitude);
//                 setCurrentPosition({
//                     lat: latitude,
//                     lng: longitude
//                 });
//             });
//         };

//         updatePosition();

//         const intervalId = setInterval(updatePosition, 1000); // Update every 10 seconds

//     }, []);

//     return (
//         <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
//         language='en'>
//             <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={currentPosition}
//                 zoom={15}
//             >
//                 <MarkerF
//                 position={currentPosition} />
//             </GoogleMap>
//         </LoadScript>
//     )
// }

// export default LiveTracking

import React, { useState, useEffect } from "react";
import {
  LoadScript,
  GoogleMap,
  MarkerF,
  DirectionsRenderer,
} from "@react-google-maps/api";
import axios from "axios";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const LiveTracking = ({ pickup, destination }) => {
  const [currentPosition, setCurrentPosition] = useState(center);
  const [destinationCoords, setDestinationCoords] = useState(null);
  const [directions, setDirections] = useState(null);

  // Geocode destination address to lat/lng
  useEffect(() => {
    if (destination) {
      const geocodeDestination = async () => {
        try {
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json`,
            {
              params: {
                address: destination,
                key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
              },
            }
          );

          const { lat, lng } =
            response.data.results[0]?.geometry.location || {};
          if (lat && lng) {
            setDestinationCoords({ lat, lng });
          }
        } catch (error) {
          console.error("Error geocoding destination:", error);
        }
      };

      geocodeDestination();
    }
  }, [destination]);

  // Calculate route between pickup and destination
  useEffect(() => {
    if (pickup && destinationCoords) {
      const calculateRoute = async () => {
        const directionsService = new window.google.maps.DirectionsService();

        const result = await directionsService.route({
          origin: pickup, // pickup location
          destination: destinationCoords, // destination coordinates
          travelMode: window.google.maps.TravelMode.DRIVING,
        });

        setDirections(result);
      };

      calculateRoute();
    }
  }, [pickup, destinationCoords]); // Recalculate route

  // Track current position of user
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition({
        lat: latitude,
        lng: longitude,
      });
    });

    const watchId = navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition({
        lat: latitude,
        lng: longitude,
      });
    });

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({
          lat: latitude,
          lng: longitude,
        });
      });
    };

    updatePosition(); // Initial location update

    const intervalId = setInterval(updatePosition, 1000); // Update every 1 second

  }, []);


  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      language="en"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentPosition}
        zoom={15}
      >
        {/* Current Position Marker */}
        <MarkerF position={currentPosition} />

        {/* Destination Marker */}
        {destinationCoords && <MarkerF position={destinationCoords} />}

        {/* Render Directions */}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default LiveTracking;
