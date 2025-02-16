// app/players/men/page.js
"use client";
import Image from "next/image";

const PlayerCard = ({ player }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={player.image}
          alt={player.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={player.id <= 3} // Only prioritize first 3 images
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-white text-xl font-bold">{player.name}</h3>
              <p className="text-gray-200 text-sm">{player.position}</p>
            </div>
            <span className="text-white text-2xl font-bold bg-red-500 rounded-full w-12 h-12 flex items-center justify-center">
              {player.kitNumber}
            </span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="fi fi-${player.nationality.toLowerCase()}"></span>
          {player.nationality}
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
