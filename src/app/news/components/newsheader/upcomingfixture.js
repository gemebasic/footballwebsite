import Image from "next/image";
import Link from "next/link";
import React from "react";

function UpcomingFixture({ upcomingFixture, teamLogos }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-800 mb-2">Upcoming Fixture</h2>
      <div className="bg-gray-100 p-4 rounded-md shadow">
        <p className="font-semibold text-gray-800 text-center mb-2">
          {upcomingFixture.date}
        </p>
        <div className="flex items-center justify-center gap-4">
          <Image
            src={teamLogos[upcomingFixture.home] || teamLogos.default}
            alt={upcomingFixture.home}
            width={50}
            height={50}
            className="rounded-full"
          />
          <p className="font-semibold text-gray-800">vs</p>
          <Image
            src={teamLogos[upcomingFixture.away] || teamLogos.default}
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
  );
}

export default UpcomingFixture;
