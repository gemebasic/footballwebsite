import Image from "next/image";
import Link from "next/link";
import React from "react";

function LatestNews({ latestNews }) {
  return (
    <div>
      {" "}
      {/* Latest News Section */}
      <h2 className="text-2xl font-bold text-red-600 mb-4">Latest News</h2>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {latestNews.map((item, index) => (
          <li key={index} className="relative group">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              className="rounded-md w-full h-auto object-cover"
            />
            <Link
              href={`/news/${item.id}`}
              className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LatestNews;
