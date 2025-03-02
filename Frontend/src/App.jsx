import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WelcomePage from "./components/WelcomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import JoinUs from "./components/JoinUs";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="bg-white min-h-screen p-6"> {/* White background for all pages */}
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
