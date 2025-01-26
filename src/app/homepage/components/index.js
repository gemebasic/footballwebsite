"use client";
import NewsHeader from "@/app/news/components/newsheader";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

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
  const news = [
    {
      title: "Adama City wins the championship!",
      image: "/bannerimg1.jpeg",
      id: 1,
    },
    {
      title: "New coach joins the team",
      image: "/bannerimg.jpg",
      id: 2,
    },
    {
      title: "Upcoming fixtures announced",
      image: "/bannerimg.jpeg",
      id: 3,
    },
    {
      title: "Adama City wins the championship!",
      image: "/bannerimg1.jpeg",
      id: 1,
    },
    {
      title: "New coach joins the team",
      image: "/bannerimg.jpg",
      id: 2,
    },
    {
      title: "Upcoming fixtures announced",
      image: "/bannerimg.jpeg",
      id: 3,
    },
  ];
  const popularNewsData = [
    { id: "4", title: "Popular News 1", image: "/bannerimg.jpeg" },
    { id: "5", title: "Popular News 2", image: "/bannerimg.jpg" },
    { id: "4", title: "Popular News 1", image: "/bannerimg.jpeg" },
    { id: "5", title: "Popular News 2", image: "/bannerimg.jpg" },
  ];
  const teamLogos = {
    ARS: "/arsenal.jpeg",
    CHL: "/chelsea.png",
    LIV: "/liverpool.png",
    EVE: "/everton.png",
    BRC: "/brighton.jpeg",
    RM: "/realmadrid.png",
    CIT: "/manchestercity.png",
    KIN: "/kings.png",
    ST: "/stoke.png",
    FRA: "/frankfurt.png",
    SPA: "/spain.jpeg",
    MUN: "/manchesterunited.jpeg",
    TOT: "/tottenham.png",
    NAP: "/napoli.png",
    ROM: "/roma.png",
    PSG: "/psg.jpeg",
    MAR: "/marselle.png",
  };

  const handleSlide = (direction) => {
    if (fixturesRef.current) {
      const container = fixturesRef.current;
      if (direction === "left") {
        const lastChild = container.lastChild;
        container.prepend(lastChild);
      } else {
        const firstChild = container.firstChild;
        container.appendChild(firstChild);
      }
    }
  };

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
      <div className="mx-auto py-4 px-3">
        <div className="bg-white text-black max-w-full py-4 relative group">
          <div className="overflow-hidden">
            <div
              ref={fixturesRef}
              className="flex gap-2 transition-transform duration-500 ease-in-out"
            >
              {fixtures.map((fixture, index) => (
                <Link
                  key={index}
                  href="/match-info/fixture"
                  className="flex-shrink-0 w-50 p-4 border rounded-md shadow bg-gray-100 text-center flex flex-col cursor-pointer"
                >
                  <time
                    dateTime={fixture.date}
                    className="text-red-600 font-bold"
                  >
                    {fixture.date}
                  </time>
                  <div className="flex flex-col items-center mt-2 gap-2">
                    <div className="flex items-center gap-4">
                      <Image
                        src={teamLogos[fixture.home]}
                        alt={fixture.home}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <span className="text-gray-600 font-semibold">
                        {fixture.note
                          ? fixture.note
                          : `${fixture.homeScore} - ${fixture.awayScore}`}
                      </span>
                      <Image
                        src={teamLogos[fixture.away]}
                        alt={fixture.away}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>
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
          {/* Left Arrow */}
          <button
            onClick={() => handleSlide("left")}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-red-600 text-white text-lg border rounded-l-full p-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
          >
            &lt;
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => handleSlide("right")}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-red-600 text-white text-lg rounded-r-full p-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
          >
            &gt;
          </button>
        </div>
        {/* News Section */}
        <NewsHeader news={news} popularNews={popularNewsData} />
      </div>
    </div>
  );
};

export default Hero;
