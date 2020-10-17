import React from "react";
import Hero from "../components/hero/hero.component";
import HowWeDo from "../components/howwedo/how-we-do.component";
import WhatWeDo from "../components/whatwedo/whatwedo.component";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <HowWeDo />
    </div>
  );
};

export default HomePage;
