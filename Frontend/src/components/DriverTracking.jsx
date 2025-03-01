import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const DriverTracking = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState("");
  const [destinationCoords, setDestinationCoords] = useState(null);
  const [route, setRoute] = useState([]);

  // ✅ Get User Location
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Fetched Location:", position.coords.latitude, position.coords.longitude);
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => alert("Error getting location: " + error.message)
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // ✅ Search for Destination
  const handleDestinationSearch = async () => {
    if (!destination) {
      alert("Please enter a location!");
      return;
    }

    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
        params: {
          format: "json",
          q: destination,
        },
      });

      if (response.data.length > 0) {
        const location = response.data[0];
        setDestinationCoords({
          lat: parseFloat(location.lat),
          lng: parseFloat(location.lon),
        });

        console.log("Destination found:", location.display_name, location.lat, location.lon);
      } else {
        alert("Location not found. Try again!");
      }
    } catch (error) {
      console.error("Error fetching destination:", error);
    }
  };

  // ✅ Set Route when User & Destination are Available
  useEffect(() => {
    if (userLocation && destinationCoords) {
      setRoute([
        [userLocation.lat, userLocation.lng],
        [destinationCoords.lat, destinationCoords.lng],
      ]);
      console.log("Route set:", route);
    }
  }, [userLocation, destinationCoords]);

  return (
    <div className="flex flex-col items-center p-4">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-4">Driver Tracking System</h1>

      {/* Buttons & Input */}
      <div className="flex space-x-4 mb-4">
        <button 
          onClick={handleGetLocation} 
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Get Current Location
        </button>

        <input
          type="text"
          placeholder="Enter Destination..."
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="border px-4 py-2 rounded-lg shadow-md"
        />

        <button 
          onClick={handleDestinationSearch} 
          className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Search
        </button>
      </div>

      {/* Map Display */}
      <MapContainer center={[33.7700, 72.3600]} zoom={13} style={{ height: "500px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* User Location Marker */}
        {userLocation && (
          <Marker position={[userLocation.lat, userLocation.lng]}>
            <Popup>Your Location</Popup>
          </Marker>
        )}

        {/* Destination Marker */}
        {destinationCoords && (
          <Marker position={[destinationCoords.lat, destinationCoords.lng]}>
            <Popup>Destination: {destination}</Popup>
          </Marker>
        )}

        {/* Route from User to Destination */}
        {route.length > 0 && <Polyline positions={route} color="blue" />}
      </MapContainer>
    </div>
  );
};

export default DriverTracking;
