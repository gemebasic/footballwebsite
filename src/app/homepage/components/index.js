"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const Hero = () => {
  const fixturesRef = useRef(null);

  const fixtures = [
    {
      date: "August 23, 2016",
      home: "ARS",
      homeScore: 3,
      away: "CHL",
      awayScore: 2,
    },
    {
      date: "August 25, 2016",
      home: "BRC",
      homeScore: 5,
      away: "RM",
      awayScore: 2,
    },
    {
      date: "August 28, 2016",
      home: "CIT",
      homeScore: 3,
      away: "KIN",
      awayScore: 3,
    },
    {
      date: "August 31, 2016",
      home: "ST",
      homeScore: 0,
      away: "FRA",
      awayScore: 1,
    },
    {
      date: "September 03, 2016",
      home: "SPA",
      note: "VS",
      away: "RM",
      status: "Full Booked",
    },
    {
      date: "September 05, 2016",
      home: "ARS",
      homeScore: 3,
      away: "CHL",
      awayScore: 2,
    },
    {
      date: "December 31, 2016",
      home: "SPA",
      note: "VS",
      away: "RM",
      status: "Full Booked",
    },
    {
      date: "January 05, 2017",
      home: "LIV",
      homeScore: 4,
      away: "EVE",
      awayScore: 1,
    },
    {
      date: "February 10, 2017",
      home: "MUN",
      homeScore: 2,
      away: "CHE",
      awayScore: 3,
    },
    {
      date: "March 15, 2017",
      home: "TOT",
      homeScore: 3,
      away: "ARS",
      awayScore: 3,
    },
    {
      date: "April 20, 2017",
      home: "NAP",
      homeScore: 1,
      away: "ROM",
      awayScore: 2,
    },
    {
      date: "May 25, 2017",
      home: "PSG",
      homeScore: 0,
      away: "MAR",
      awayScore: 1,
    },
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (fixturesRef.current) {
        const firstChild = fixturesRef.current.firstChild;
        fixturesRef.current.appendChild(firstChild); // Move first fixture to the end
      }
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="bg-white text-black">
      {/* Banner Section */}
      <div className="bg-red-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold uppercase">
          Adama City Football Club (ADfc)
        </h1>
        <p className="mt-2 text-lg">Pride of Adama</p>
      </div>

      {/* Fixture Section */}
      <div className="bg-white text-black max-w-full mx-auto py-8 ">
        <div className="overflow-hidden">
          <div
            ref={fixturesRef}
            className="flex gap-2 transition-transform duration-[3s] ease-in-out"
          >
            {fixtures.map((fixture, index) => (
              <Link
                key={index}
                href="/match-info/fixture"
                className="flex-shrink-0 w-48 p-4 border rounded-md shadow bg-gray-100 text-center flex flex-col cursor-pointer transform transition-transform duration-500 ease-in-out"
              >
                <time
                  dateTime={fixture.date}
                  className="text-red-600 font-bold"
                >
                  {fixture.date}
                </time>
                <div className="flex flex-col mt-2">
                  <span className="font-semibold">{fixture.home}</span>
                  <span className="text-gray-600">
                    {fixture.note
                      ? fixture.note
                      : fixture.homeScore + " - " + fixture.awayScore}
                  </span>
                  <span className="font-semibold">{fixture.away}</span>
                  {fixture.status && (
                    <span className="text-sm text-gray-500">
                      {fixture.status}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
