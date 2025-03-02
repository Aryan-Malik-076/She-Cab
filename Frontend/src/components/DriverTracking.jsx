import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const DriverTracking = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState("");
  const [destinationCoords, setDestinationCoords] = useState(null);
  const [route, setRoute] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [eta, setEta] = useState(null);

  // ✅ Sample Drivers in Attock
  const drivers = [
    { id: 1, name: "Ali Khan", lat: 33.7600, lng: 72.3500 },
    { id: 2, name: "Bilal Ahmed", lat: 33.7650, lng: 72.3550 },
    { id: 3, name: "Hassan Raza", lat: 33.7705, lng: 72.3605 },
    { id: 4, name: "Usman Tariq", lat: 33.7750, lng: 72.3650 },
    { id: 5, name: "Sami Ullah", lat: 33.7800, lng: 72.3700 },
    { id: 6, name: "Zahid Mehmood", lat: 33.7850, lng: 72.3750 },
    { id: 7, name: "Faisal Khan", lat: 33.7900, lng: 72.3800 },
    { id: 8, name: "Adnan Butt", lat: 33.7950, lng: 72.3850 },
    { id: 9, name: "Kamran Sheikh", lat: 33.8000, lng: 72.3900 },
    { id: 10, name: "Noman Javed", lat: 33.8050, lng: 72.3950 },
  ];

  // ✅ Get User Location
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
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
        params: { format: "json", q: destination },
      });
      if (response.data.length > 0) {
        const location = response.data[0];
        setDestinationCoords({ lat: parseFloat(location.lat), lng: parseFloat(location.lon) });
      } else {
        alert("Location not found. Try again!");
      }
    } catch (error) {
      console.error("Error fetching destination:", error);
    }
  };

  // ✅ Set Route when Driver is Confirmed
  useEffect(() => {
    if (selectedDriver && userLocation && destinationCoords) {
      setRoute([
        [userLocation.lat, userLocation.lng],
        [destinationCoords.lat, destinationCoords.lng],
      ]);
      
      // ✅ Estimate Time of Arrival (ETA)
      const distance = Math.sqrt(
        Math.pow(destinationCoords.lat - userLocation.lat, 2) +
        Math.pow(destinationCoords.lng - userLocation.lng, 2)
      );
      const estimatedTime = (distance * 50).toFixed(2); // Assuming 50 min per unit distance
      setEta(estimatedTime);
    }
  }, [selectedDriver, userLocation, destinationCoords]);

  return (
    <div className="flex flex-col items-center p-4 h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">Driver Tracking System</h1>

      <div className="flex space-x-4 mb-4">
        <button onClick={handleGetLocation} className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Get Current Location
        </button>

        <input
          type="text"
          placeholder="Enter Destination..."
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="border px-4 py-2 rounded-lg shadow-md"
        />

        <button onClick={handleDestinationSearch} className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 transition">
          Search
        </button>
      </div>

      <MapContainer center={[33.7700, 72.3600]} zoom={13} style={{ height: "80vh", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {userLocation && (
          <Marker position={[userLocation.lat, userLocation.lng]}>
            <Popup>Your Location</Popup>
          </Marker>
        )}

        {destinationCoords && (
          <Marker position={[destinationCoords.lat, destinationCoords.lng]}>
            <Popup>Destination: {destination}</Popup>
          </Marker>
        )}

        {drivers.map((driver) => (
          <Marker key={driver.id} position={[driver.lat, driver.lng]}>
            <Popup>
              <div>
                <p className="font-bold">{driver.name}</p>
                <button
                  onClick={() => setSelectedDriver(driver)}
                  className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700 transition"
                >
                  Confirm Driver
                </button>
              </div>
            </Popup>
          </Marker>
        ))}

        {route.length > 0 && <Polyline positions={route} color="red" />}
      </MapContainer>

      {selectedDriver && eta && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-lg font-semibold">{selectedDriver.name} is on the way!</p>
          <p>Estimated Time of Arrival: {eta} minutes</p>
        </div>
      )}
    </div>
  );
};

export default DriverTracking;