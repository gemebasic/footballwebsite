import Image from "next/image";
import Link from "next/link";
import React from "react";

function PopulerNews({ popularNews }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-800 mb-2">Popular News</h2>
      <ul className="space-y-4">
        {popularNews.map((item, index) => (
          <li key={index} className="flex items-center gap-4">
            <Image
              src={item.image}
              alt={item.title}
              width={60}
              height={60}
              className="rounded-md"
            />
            <Link
              href={`/news/${item.id}`}
              className="hover:underline text-gray-800"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopulerNews;
