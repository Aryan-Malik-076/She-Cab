import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactUs = () => {
  // Coordinates for Attock City
  const attockCoords = { lat: 33.7667, lng: 72.3667 };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-pink-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-purple-800 mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          We're here to help! Reach out to us for any questions or concerns.
        </p>

        <div className="space-y-6">
          {/* Contact Form */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
              Get in Touch
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Have a question or need assistance? Fill out the form below, and
              we'll get back to you as soon as possible.
            </p>
            <form className="space-y-4 mt-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
              Contact Information
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-purple-600" size={20} />
                <p>support@shecab.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-purple-600" size={20} />
                <p>+92 123 456 7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-purple-600" size={20} />
                <p>123 She-Cab Lane, Attock City, Pakistan</p>
              </div>
            </div>
          </section>

          {/* Map Integration */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
              Our Location
            </h2>
            <div className="h-64 rounded-lg overflow-hidden">
              <MapContainer
                center={[attockCoords.lat, attockCoords.lng]}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[attockCoords.lat, attockCoords.lng]}>
                  <Popup>She-Cab Office, Attock City</Popup>
                </Marker>
              </MapContainer>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;