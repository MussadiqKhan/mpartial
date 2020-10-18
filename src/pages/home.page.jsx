import React from "react";
import Deliverables from "../components/deliverables/deliverables.component";
import FeeStructure from "../components/feeStructure/feeStrucrure.component";
import Hero from "../components/hero/hero.component";
import HowWeDo from "../components/howwedo/how-we-do.component";
import WhatWeDo from "../components/whatwedo/whatwedo.component";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <HowWeDo />
      <FeeStructure />
      <Deliverables />
    </div>
  );
};

export default HomePage;
