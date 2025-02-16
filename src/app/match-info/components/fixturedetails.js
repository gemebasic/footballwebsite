import Image from "next/image";
import React from "react";

function FixtureDetails({ fixture, teamLogos }) {
  if (!fixture)
    return <p className="text-center text-gray-600">No fixture found</p>;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 border">
      <time className="block text-center text-red-600 font-bold text-lg">
        {fixture.date}
      </time>
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="flex flex-col items-center">
          <Image
            src={teamLogos[fixture.home] || "/default-team.png"}
            alt={fixture.home}
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="font-semibold">{fixture.home}</span>
        </div>
        <span className="text-xl font-bold text-gray-700">
          {fixture.note
            ? fixture.note
            : `${fixture.homeScore} - ${fixture.awayScore}`}
        </span>
        <div className="flex flex-col items-center">
          <Image
            src={teamLogos[fixture.away] || "/default-team.png"}
            alt={fixture.away}
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="font-semibold">{fixture.away}</span>
        </div>
      </div>
      {fixture.status && (
        <p className="text-center text-gray-500 mt-2">{fixture.status}</p>
      )}
    </div>
  );
}

export default FixtureDetails;
