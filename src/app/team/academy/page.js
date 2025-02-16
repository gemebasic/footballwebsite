import React from "react";
import PlayersPage from "../components/playercard";
import PlayerCard from "../components/playercard";
// import PlayersPage from "./components/playercard";
// import PlayersPage from "./components/playercard";

function TeamRosterAcademy() {
  const players = [
    {
      id: 1,
      name: "Lionel Messi",
      kitNumber: 10,
      position: "Forward",
      image: "/messi.jpeg",
      nationality: "Argentina",
    },
    {
      id: 2,
      name: "Kevin De Bruyne",
      kitNumber: 17,
      position: "Midfielder",
      image: "/debruyne.jpeg",
      nationality: "Belgium",
    },
    // Add more players...
  ];

  return (
    <div>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Academy's First Team
            </h1>
            <p className="text-gray-600">2023/24 Squad</p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {players.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamRosterAcademy;
