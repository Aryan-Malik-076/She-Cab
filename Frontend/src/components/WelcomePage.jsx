import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate(); // Ensure inside <Router>

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-8">
      <div className="flex-1 max-w-sm text-left ml-20">
        <div className="flex items-center space-x-2">
          <span className="bg-black text-white text-lg font-bold px-3 py-2 rounded-lg">
            SheCab
          </span>
        </div>
        <h1 className="text-4xl font-bold text-black mt-3">Empowerment</h1>
        <p className="text-md text-gray-600 mt-2 leading-relaxed">
          Explore a safe and reliable ride-hailing service by women, for women. 
          Join the SheCab community today!
        </p>
        <button
          onClick={() => navigate('/signup')}
          className="mt-4 bg-black text-white py-2 px-5 rounded-lg hover:bg-gray-900 transition duration-300"
        >
          Join Now
        </button>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="w-90 h-90 rounded-full overflow-hidden border-4 border-black">
          <img
            src="https://images.pexels.com/photos/1051071/pexels-photo-1051071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Empowerment"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
