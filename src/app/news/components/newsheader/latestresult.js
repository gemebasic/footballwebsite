import Image from "next/image";
import Link from "next/link";
import React from "react";

function LatestreSult({ latestResult, teamLogos }) {
  return (
    <div>
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-2">Latest Result</h2>
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
    </div>
  );
}

export default LatestreSult;
