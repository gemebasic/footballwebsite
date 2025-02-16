import Image from "next/image";
import Link from "next/link";

const ResultsTables = ({ fixtures, teamLogos }) => {
  const results = fixtures.filter(
    (fixture) =>
      fixture.homeScore !== undefined && fixture.awayScore !== undefined
  );

  return (
    <div className="mx-auto py-4 sm:py-8 px-2 sm:px-4">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
          Latest Results
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="px-2 sm:px-4 py-2 text-left text-sm sm:text-base">
                  Date
                </th>
                <th className="px-2 sm:px-4 py-2 text-center text-sm sm:text-base">
                  Home
                </th>
                <th className="px-2 sm:px-4 py-2 text-center text-sm sm:text-base">
                  Score
                </th>
                <th className="px-2 sm:px-4 py-2 text-center text-sm sm:text-base">
                  Away
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-colors even:bg-gray-50"
                >
                  {/* Date Cell */}
                  <td className="px-2 sm:px-4 py-2">
                    <Link
                      href={`/match-info/result/${result.id}`}
                      className="block cursor-pointer text-sm sm:text-base"
                    >
                      {new Date(result.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </Link>
                  </td>

                  {/* Home Team */}
                  <td className="px-2 sm:px-4 py-2">
                    <Link
                      href="/match-info/fixture"
                      className="flex items-center gap-1 sm:gap-2 justify-center cursor-pointer"
                    >
                      {teamLogos[result.home] && (
                        <Image
                          src={teamLogos[result.home]}
                          alt={result.home}
                          width={24}
                          height={24}
                          className="rounded-full w-6 h-6 sm:w-8 sm:h-8"
                        />
                      )}
                      <span className="text-xs sm:text-sm">{result.home}</span>
                    </Link>
                  </td>

                  {/* Score */}
                  <td className="px-2 sm:px-4 py-2 text-center font-bold text-sm sm:text-base">
                    <Link
                      href="/match-info/fixture"
                      className="block cursor-pointer"
                    >
                      {result.homeScore} - {result.awayScore}
                    </Link>
                  </td>

                  {/* Away Team */}
                  <td className="px-2 sm:px-4 py-2">
                    <Link
                      href="/match-info/fixture"
                      className="flex items-center gap-1 sm:gap-2 justify-center cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm">{result.away}</span>
                      {teamLogos[result.away] && (
                        <Image
                          src={teamLogos[result.away]}
                          alt={result.away}
                          width={24}
                          height={24}
                          className="rounded-full w-6 h-6 sm:w-8 sm:h-8"
                        />
                      )}
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
export default ResultsTables;
