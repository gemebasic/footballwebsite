"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const teamLogos = {
  ARS: "/arsenal.jpeg",
  CHE: "/chelsea.png",
  LIV: "/liverpool.png",
  EVE: "/everton.png",
};

const NewsHeader = ({ news, popularNews }) => {
  const featuredNews = news[0]; // Assume the first item is the featured news
  const latestNews = news.slice(1); // The rest are the latest news
  const latestResult = { home: "ARS", homeScore: 3, away: "CHE", awayScore: 2 }; // Example latest result
  const upcomingFixture = { date: "Jan 25, 2025", home: "LIV", away: "EVE" }; // Example upcoming fixture

  return (
    <div className="bg-gray-100 py-6 px-8 mx-auto container grid grid-cols-1 md:grid-cols-[70%_30%] gap-6">
      {/* First Column: Featured News and Latest News */}
      <div>
        {/* Featured News Section */}

        {featuredNews && (
          <div className="mb-6">
            <Image
              src={featuredNews.image}
              alt={featuredNews.title}
              width={800}
              height={400}
              className="rounded-md w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h1 className="text-3xl font-bold text-gray-900 mt-4">
              <Link
                href={`/news/${featuredNews.id}`}
                className="hover:underline"
              >
                {featuredNews.title}
              </Link>
            </h1>
          </div>
        )}

        {/* Latest News Section */}
        <h2 className="text-2xl font-bold text-red-600 mb-4">Latest News</h2>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {latestNews.map((item, index) => (
            <li key={index} className="relative group">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="rounded-md w-full h-auto object-cover"
              />
              <Link
                href={`/news/${item.id}`}
                className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Second Column: Popular News, Table, Latest Result, and Upcoming Fixture */}
      <div className="bg-white p-4 rounded-md shadow space-y-6">
        {/* Table Section */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-2">Standings</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-3 text-gray-600">Team</th>
                <th className="py-2 px-3 text-gray-600">Pts</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-3">ARS</td>
                <td className="py-2 px-3">25</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3">CHE</td>
                <td className="py-2 px-3">23</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Latest Result Section */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            Latest Result
          </h2>
          <div className="bg-gray-100 p-4 rounded-md shadow">
            <div className="flex items-center justify-center gap-4 mb-2">
              <Image
                src={teamLogos[latestResult.home]}
                alt={latestResult.home}
                width={50}
                height={50}
                className="rounded-full"
              />
              <p className="font-semibold text-gray-800">
                {latestResult.homeScore} - {latestResult.awayScore}
              </p>
              <Image
                src={teamLogos[latestResult.away]}
                alt={latestResult.away}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <Link
              href="/match-info/latest-result"
              className="block text-center bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
            >
              View Match Info
            </Link>
          </div>
        </div>

        {/* Upcoming Fixture Section */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            Upcoming Fixture
          </h2>
          <div className="bg-gray-100 p-4 rounded-md shadow">
            <p className="font-semibold text-gray-800 text-center mb-2">
              {upcomingFixture.date}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Image
                src={teamLogos[upcomingFixture.home]}
                alt={upcomingFixture.home}
                width={50}
                height={50}
                className="rounded-full"
              />
              <p className="font-semibold text-gray-800">vs</p>
              <Image
                src={teamLogos[upcomingFixture.away]}
                alt={upcomingFixture.away}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <Link
              href="/match-info/upcoming-fixture"
              className="block text-center bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 mt-4"
            >
              View Fixture Info
            </Link>
          </div>
        </div>
        {/* Popular News Section */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-2">Popular News</h2>
          <ul className="space-y-4">
            {popularNews.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <Link
                  href={`/news/${item.id}`}
                  className="hover:underline text-gray-800"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsHeader;
