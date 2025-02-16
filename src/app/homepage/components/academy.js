import React from "react";
import Image from "next/image";
import Link from "next/link";

const Academy = () => {
  return (
    <div className="bg-gray-100 py-12">
      {/* Banner Section */}
      <div className="relative h-64 md:h-80 lg:h-96">
        <Image
          src="/academybannerimg1.jpeg" // Replace with your banner image path
          alt="Academy Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-lg md:text-xl lg:text-2xl">
              Shaping the Future of Football, One Player at a Time
            </p>
          </div>
        </div>
      </div>

      {/* Academy Content Section */}
      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Academy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: About Academy */}
          <Link
            href="/academy-about"
            className="group relative block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/youngplayer.jpeg" // Replace with your image path
                alt="About Academy"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-red-600 transition-colors">
                About Our Academy
              </h3>
              <p className="text-gray-600">
                Discover our mission, values, and commitment to developing young
                talent.
              </p>
            </div>
          </Link>

          {/* Column 2: Training Programs */}
          <Link
            href="/academy-programs"
            className="group relative block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/youngplayer2.jpeg" // Replace with your image path
                alt="Training Programs"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-red-600 transition-colors">
                Training Programs
              </h3>
              <p className="text-gray-600">
                Explore our specialized training programs for all age groups.
              </p>
            </div>
          </Link>

          {/* Column 3: Success Stories */}
          <Link
            href="/academy-success"
            className="group relative block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/youngplayer2.jpeg" // Replace with your image path
                alt="Success Stories"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-red-600 transition-colors">
                Success Stories
              </h3>
              <p className="text-gray-600">
                Meet our alumni and their inspiring journeys in football.
              </p>
            </div>
          </Link>
        </div>

        {/* "Learn More About Our Academy" Button */}
        <div className="text-center mt-10">
          <Link
            href="/academy"
            className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Learn More About Our Academy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Academy;
