import React from "react";
import Image from "next/image";
import Link from "next/link";

const AdamaWomenFootball = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Adama Women's Football
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: About Women's Team */}
          <Link
            href="/women-football"
            className="group relative block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/women1.jpeg" // Replace with your image path
                alt="About Our Women's Team"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-red-600 transition-colors">
                About Our Women's Team
              </h3>
              <p className="text-gray-600">
                Learn more about our talented women's team and their journey.
              </p>
            </div>
          </Link>

          {/* Column 2: Upcoming Fixtures */}
          <Link
            href="/women-fixtures"
            className="group relative block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/women2.jpg" // Replace with your image path
                alt="Upcoming Fixtures"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-red-600 transition-colors">
                Upcoming Fixtures
              </h3>
              <p className="text-gray-600">
                Check out the upcoming matches for our women's team.
              </p>
            </div>
          </Link>

          {/* Column 3: Achievements */}
          <Link
            href="/women-achievements"
            className="group relative block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/women1.jpeg" // Replace with your image path
                alt="Achievements"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-red-600 transition-colors">
                Achievements
              </h3>
              <p className="text-gray-600">
                Discover the accolades and milestones of our women's team.
              </p>
            </div>
          </Link>
        </div>

        {/* "See More About Our Women" Button */}
        <div className="text-center mt-10">
          <Link
            href="/women-football"
            className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
          >
            See More About Our Women
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdamaWomenFootball;
