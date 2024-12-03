import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper.tsx";
import PredictionGraph from "../components/PredictionGraph.tsx";
import Motivation from "../components/Motivation.tsx";


const Home: React.FC = () => {

  return (
    <PageWrapper>
      
      <h1>Results</h1>
      {/* <h2>United States:</h2> */}
      <img src="HealthcareAccessWebsite/images/PredictionGraphs/All_States,_DC_and_Territories_(median)2__MLP.png" alt="United States Map" style={{ maxWidth: '100%', maxHeight: '80%'}} />
      <p> Overall prediction results for the entire United States, on the percent of population who cannot afford healthcare. A clear upwards trend is predicted by the model, inplying that our ability to access healthcare is only going to decline if we allow trends to continue the way they are. If replicated on a larger scale, it could be a catalyst for policy change as the forcast is clear. </p>
      <PredictionGraph />
    </PageWrapper>
  );
};

export default Home;