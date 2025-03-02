import React from "react";
import { FaUser, FaCar, FaIdCard, FaPhone, FaEnvelope } from "react-icons/fa";

const JoinUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-pink-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-purple-800 mb-6 text-center">
          Join She-Cab
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Become a part of our empowering community of female drivers.
        </p>

        <form className="space-y-6">
          {/* Personal Information */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">
              Personal Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaUser className="text-purple-600" size={20} />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-purple-600" size={20} />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-purple-600" size={20} />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div className="flex items-center space-x-3">
                <FaIdCard className="text-purple-600" size={20} />
                <input
                  type="text"
                  placeholder="CNIC Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>
          </section>

          {/* Driving Experience */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">
              Driving Experience
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Years of Driving Experience
                </label>
                <input
                  type="number"
                  placeholder="e.g., 3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Do you have a valid driver's license?
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </section>

          {/* Vehicle Information */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">
              Vehicle Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaCar className="text-purple-600" size={20} />
                <input
                  type="text"
                  placeholder="Vehicle Model"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Vehicle Registration Number
                </label>
                <input
                  type="text"
                  placeholder="e.g., ABC-123"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Submit Application
          </button>
        </form>

        {/* Call to Action */}
        <p className="mt-6 text-center text-gray-700">
          Have questions?{" "}
          <a href="/contact" className="text-purple-600 hover:underline">
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
};

export default JoinUs;