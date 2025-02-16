"use client";
// const { default: NewsItem } = require("./components/newsheader/newsitem");

import { useState } from "react";
import NewsItem from "./newsitem";

const NewsPage = () => {
  const [articles] = useState([
    {
      id: 1,
      title: "Breaking News: Major Tech Innovation",
      image: "/winner.jpg",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>",
      likes: 42,
      dislikes: 5,
      publishedAt: "2023-07-20",
    },
    // Add more articles as needed
  ]);

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
      {articles.map((article) => (
        <NewsItem key={article.id} article={article} />
      ))}
    </main>
  );
};
export default NewsPage;
