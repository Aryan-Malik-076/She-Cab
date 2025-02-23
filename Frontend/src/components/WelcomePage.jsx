import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center p-8">
      {/* Left Side: Project Name, Description, and Buttons */}
      <div className="flex-1 max-w-2xl space-y-8">
        <h1 className="text-6xl font-bold text-purple-600">SheCab</h1>
        <p className="text-lg text-gray-600">
          Empowering women with safe and reliable rides. Your trusted partner for secure and professional cab services tailored for women.
        </p>
        <div className="flex space-x-6">
          <button
            onClick={() => navigate('/login')}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition duration-300 font-semibold"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="bg-transparent border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 font-semibold"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="flex-1 flex justify-end">
        <img
          src="https://wallpapercave.com/wp/wp8888989.jpg" // Replace with your image URL
          alt="SheCab"
          className="rounded-lg shadow-2xl max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default WelcomePage;