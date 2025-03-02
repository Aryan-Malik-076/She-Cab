import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-pink-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-purple-800 mb-6 text-center">
          About She-Cab
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Empowering women, one ride at a time.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At She-Cab, we are committed to providing safe, reliable, and
              empowering transportation solutions exclusively for women. Our
              mission is to create a secure environment where women can travel
              with confidence, knowing they are in the hands of trusted female
              drivers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
              Why Choose She-Cab?
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Safety First:</strong> All our drivers are rigorously
                vetted and trained to ensure your safety.
              </li>
              <li>
                <strong>Women-Only Drivers:</strong> Our drivers are exclusively
                women, creating a comfortable and supportive environment.
              </li>
              <li>
                <strong>24/7 Availability:</strong> We are here for you anytime,
                anywhere.
              </li>
              <li>
                <strong>Eco-Friendly Rides:</strong> We prioritize sustainability
                with eco-friendly vehicles.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed">
              She-Cab was founded in 2023 by a group of passionate women who
              recognized the need for a safe and reliable transportation service
              tailored for women. Inspired by the challenges women face in
              commuting, we set out to create a solution that not only addresses
              safety concerns but also empowers women by providing employment
              opportunities as drivers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
              Join the Movement
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Whether you're a rider or a driver, She-Cab is more than just a cab
              service—it's a movement. Together, we can redefine transportation
              and create a safer, more inclusive world for women.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;