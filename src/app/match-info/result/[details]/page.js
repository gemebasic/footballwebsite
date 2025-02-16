import React from "react";
import ResultDetails from "../../components/resultdetail";

async function ResultDetail({ params }) {
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

  const { details } = params;
  console.log("Params:", params); // Debugging: Check params value

  const fixture = fixtures.find((r) => r.id === Number(details));
  console.log("Fixture Found:", fixture); // Debugging: Check if fixture is found

  if (!fixture) {
    return <div className="text-center text-red-600">Fixture not found.</div>;
  }
  return (
    <div>
      <ResultDetails fixture={fixture} teamLogos={teamLogos} />
    </div>
  );
}

export default ResultDetail;
