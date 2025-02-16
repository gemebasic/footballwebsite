import Image from "next/image";
import Link from "next/link";
import React from "react";

function FeaturedNews({ featuredNews }) {
  return (
    <div>
      {/* Featured News Section */}

      {featuredNews && (
        <div className="mb-6">
          <Image
            src={featuredNews.image}
            alt={featuredNews.title}
            width={800}
            height={400}
            className="rounded-md w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <h1 className="text-3xl font-bold text-gray-900 mt-4">
            <Link href={`/news/${featuredNews.id}`} className="hover:underline">
              {featuredNews.title}
            </Link>
          </h1>
        </div>
      )}
    </div>
  );
}

export default FeaturedNews;
