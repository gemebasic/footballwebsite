"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import CommentSection from "./commentsection";

// Dynamic import for heavy components
// const CommentSection = dynamic(() => requir("./CommentSection"));

// Custom hook for voting logic
// Updated voting logic hook
const useVoting = (initialState) => {
  const [votes, setVotes] = useState(initialState);

  const handleVote = (type) => {
    setVotes((prev) => {
      const newState = { ...prev };

      if (type === prev.userVote) {
        // Toggle off existing vote
        newState[type] -= 1;
        newState.userVote = null;
      } else {
        // Remove previous vote if exists
        if (prev.userVote) {
          newState[prev.userVote] -= 1;
        }
        // Add new vote
        newState[type] += 1;
        newState.userVote = type;
      }

      return newState;
    });
  };

  return { votes, handleVote };
};
// News Item Component
const NewsItem = ({ article }) => {
  const { votes, handleVote } = useVoting({
    likes: article.likes || 0,
    dislikes: article.dislikes || 0,
    userVote: null,
  });

  return (
    <article className="max-w-4xl mx-auto mb-8 bg-white rounded-lg shadow-lg">
      <header className="relative h-64 sm:h-96">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover rounded-t-lg"
          priority
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </header>

      <div className="p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">{article.title}</h1>

        <div
          className="prose max-w-none mb-6"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => handleVote("likes")}
            aria-label="Like this article"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              votes.userVote === "likes"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <span>👍</span>
            <span>{votes.likes}</span>
          </button>

          <button
            onClick={() => handleVote("dislikes")}
            aria-label="Dislike this article"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              votes.userVote === "dislikes"
                ? "bg-red-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <span>👎</span>
            {/* <span>{votes.dislikes}</span> */}
          </button>
        </div>

        <CommentSection articleId={article.id} />
      </div>
    </article>
  );
};

// Main News Page

export default NewsItem;
