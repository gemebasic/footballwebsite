import Image from "next/image";
import Link from "next/link";
import ResultsTables from "../components/resulsttable";

const ResultMatch = () => {
  const fixtures = [
    {
      id: 1,
      date: "August 23, 2016",
      home: "ARS",
      homeScore: 3,
      away: "CHL",
      awayScore: 2,
    },
    {
      id: 2,
      date: "August 25, 2016",
      home: "BRC",
      homeScore: 5,
      away: "RM",
      awayScore: 2,
    },
    {
      id: 3,
      date: "August 28, 2016",
      home: "CIT",
      homeScore: 3,
      away: "KIN",
      awayScore: 3,
    },
    {
      id: 4,
      date: "August 31, 2016",
      home: "ST",
      homeScore: 0,
      away: "FRA",
      awayScore: 1,
    },
    {
      id: 5,
      date: "September 03, 2016",
      home: "SPA",
      note: "VS",
      away: "RM",
      status: "Full Booked",
    },
    {
      id: 6,
      date: "September 05, 2016",
      home: "ARS",
      homeScore: 3,
      away: "CHL",
      awayScore: 2,
    },
    {
      id: 7,
      date: "December 31, 2016",
      home: "SPA",
      note: "VS",
      away: "RM",
      status: "Full Booked",
    },
    {
      id: 8,
      date: "January 05, 2017",
      home: "LIV",
      homeScore: 4,
      away: "EVE",
      awayScore: 1,
    },
    {
      id: 9,
      date: "February 10, 2017",
      home: "MUN",
      homeScore: 2,
      away: "CHL",
      awayScore: 3,
    },
    {
      id: 10,
      date: "March 15, 2017",
      home: "TOT",
      homeScore: 3,
      away: "ARS",
      awayScore: 3,
    },
    {
      id: 11,
      date: "April 20, 2017",
      home: "NAP",
      homeScore: 1,
      away: "ROM",
      awayScore: 2,
    },
    {
      id: 12,
      date: "May 25, 2017",
      home: "PSG",
      homeScore: 0,
      away: "MAR",
      awayScore: 1,
    },
  ];
  const teamLogos = {
    ARS: "/arsenal.jpeg",
    CHL: "/chelsea.png",
    LIV: "/liverpool.png",
    EVE: "/everton.png",
  };
  // const results = fixtures.filter(
  //   (fixture) =>
  //     fixture.homeScore !== undefined && fixture.awayScore !== undefined
  // );
  return <ResultsTables fixtures={fixtures} teamLogos={teamLogos} />;
};

export default ResultMatch;
