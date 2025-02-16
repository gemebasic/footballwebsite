import Image from "next/image";

const TableResult = () => {
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
      away: "CHL",
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

  // Calculate standings
  const standings = {};

  fixtures.forEach((fixture) => {
    if (fixture.homeScore === undefined || fixture.awayScore === undefined)
      return;

    const home = fixture.home;
    const away = fixture.away;
    const homeScore = fixture.homeScore;
    const awayScore = fixture.awayScore;

    if (!standings[home]) {
      standings[home] = { team: home, points: 0, played: 0 };
    }
    if (!standings[away]) {
      standings[away] = { team: away, points: 0, played: 0 };
    }

    standings[home].played++;
    standings[away].played++;

    if (homeScore > awayScore) {
      standings[home].points += 3;
    } else if (awayScore > homeScore) {
      standings[away].points += 3;
    } else {
      standings[home].points += 1;
      standings[away].points += 1;
    }
  });

  // Convert to array and sort
  const standingsArray = Object.values(standings).sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    return a.team.localeCompare(b.team);
  });

  return (
    <div className="mx-auto py-8 px-3">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          League Standings
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="px-4 py-3 text-left">Pos</th>
                <th className="px-4 py-3 text-left">Team</th>
                <th className="px-4 py-3 text-center">Played</th>
                <th className="px-4 py-3 text-center">Points</th>
              </tr>
            </thead>
            <tbody>
              {standingsArray.map((team, index) => (
                <tr key={team.team} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <Image
                      src={teamLogos[team.team]}
                      alt={team.team}
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <span>{team.team}</span>
                  </td>
                  <td className="px-4 py-3 text-center">{team.played}</td>
                  <td className="px-4 py-3 text-center font-bold">
                    {team.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableResult;
