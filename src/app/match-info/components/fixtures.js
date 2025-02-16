"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const FixtureTable = ({ fixtures, teamLogos, title }) => {
  return (
    <div className="px-2 sm:px-4">
      <div className="bg-white text-black p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
          {title}
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="p-2 sm:p-3 border text-sm sm:text-base">Date</th>
                <th className="p-2 sm:p-3 border text-sm sm:text-base">Home</th>
                <th className="p-2 sm:p-3 border text-sm sm:text-base">
                  Score
                </th>
                <th className="p-2 sm:p-3 border text-sm sm:text-base">Away</th>
                <th className="p-2 sm:p-3 border text-sm sm:text-base hidden md:table-cell">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {fixtures.map((fixture, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors even:bg-gray-50"
                >
                  {/* Date */}
                  <td className="p-2 sm:p-3 border text-center text-sm sm:text-base">
                    <Link
                      href={`/match-info/fixture/${fixture.id}`}
                      className="block w-full h-full"
                    >
                      {new Date(fixture.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </Link>
                  </td>

                  {/* Home Team */}
                  <td className="p-2 sm:p-3 border">
                    <Link
                      href={`/match-info/fixture/${fixture.id}`}
                      className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2"
                    >
                      <Image
                        src={teamLogos[fixture.home] || "/default-logo.png"}
                        alt={fixture.home}
                        width={24}
                        height={24}
                        className="rounded-full w-6 h-6 sm:w-8 sm:h-8"
                      />
                      <span className="text-xs sm:text-sm">{fixture.home}</span>
                    </Link>
                  </td>

                  {/* Score */}
                  <td className="p-2 sm:p-3 border text-center text-sm sm:text-base font-semibold">
                    <Link
                      href={`/match-info/fixture/${fixture.id}`}
                      className="block w-full h-full"
                    >
                      {fixture.note || (
                        <>
                          {fixture.homeScore ?? 0}
                          <span className="mx-1">-</span>
                          {fixture.awayScore ?? 0}
                        </>
                      )}
                    </Link>
                  </td>

                  {/* Away Team */}
                  <td className="p-2 sm:p-3 border">
                    <Link
                      href={`/match-info/fixture/${fixture.id}`}
                      className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2"
                    >
                      <Image
                        src={teamLogos[fixture.away] || "/default-logo.png"}
                        alt={fixture.away}
                        width={24}
                        height={24}
                        className="rounded-full w-6 h-6 sm:w-8 sm:h-8"
                      />
                      <span className="text-xs sm:text-sm">{fixture.away}</span>
                    </Link>
                  </td>

                  {/* Status - Hidden on mobile */}
                  <td className="p-2 sm:p-3 border text-center text-sm sm:text-base hidden md:table-cell">
                    <Link
                      href={`/match-info/fixture/${fixture.id}`}
                      className="block w-full h-full"
                    >
                      <span
                        className={`px-2 py-1 rounded ${
                          fixture.status === "Full Booked"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {fixture.status || "Upcoming"}
                      </span>
                    </Link>
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

export default FixtureTable;
