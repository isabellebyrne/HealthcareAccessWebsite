import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper.tsx";
import PredictionGraph from "../components/PredictionGraph.tsx";
import Motivation from "../components/Motivation.tsx";


const Home: React.FC = () => {

  return (
    <PageWrapper>
      
      <h1>Results</h1>
      <PredictionGraph />
    </PageWrapper>
  );
};

export default Home;