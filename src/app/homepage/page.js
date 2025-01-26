// homepage/page.js
import React from "react";

import SocialMediaFeed from "./components/socialmedia";
import Hero from "./components";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <SocialMediaFeed />
    </div>
  );
};

export default HomePage;
