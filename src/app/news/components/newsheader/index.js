"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import FeaturedNews from "./featurednews";
import LatestNews from "./latestnews";
import TableSection from "./tablesection";
import LatestreSult from "./latestresult";
import UpcomingFixture from "./upcomingfixture";
import PopulerNews from "./populernews";

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
        <FeaturedNews featuredNews={featuredNews} />
        <LatestNews latestNews={latestNews} />
      </div>

      {/* Second Column: Popular News, Table, Latest Result, and Upcoming Fixture */}
      <div className="bg-white p-4 rounded-md shadow space-y-6">
        {/* Table Section */}
        <Link href={"/match-info/table"}>
          <TableSection />
        </Link>

        {/* Latest Result Section */}
        <LatestreSult latestResult={latestResult} teamLogos={teamLogos} />
        {/* Upcoming Fixture Section */}
        <UpcomingFixture
          upcomingFixture={upcomingFixture}
          teamLogos={teamLogos}
        />
        {/* Popular News Section */}
        <PopulerNews popularNews={popularNews} />
      </div>
    </div>
  );
};

export default NewsHeader;
