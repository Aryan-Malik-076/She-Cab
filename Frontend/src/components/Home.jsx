import React from "react";
import MapComponent from "./MapComponent"; // Adjust the import path as necessary

const Home = () => {
  const handleDriverSelection = (driver) => {
    console.log("Selected Driver:", driver);
    // You can add more logic here, such as navigating to a booking page
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Welcome to Driver Tracking System</h1>
        <p className="text-sm">Find and track your nearest driver in real-time!</p>
      </header>

      {/* Map Section */}
      <div className="flex-grow">
        <MapComponent setSelectedDriver={handleDriverSelection} />
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2023 Driver Tracking System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;