import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper.tsx";
import { Tabs, Tab, Box } from "@mui/material";

// List of all 50 states
const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
  "Wisconsin", "Wyoming"
];

// Update the image paths to point to the public directory
const stateImages = states.map(
  (state) => `/images/PredictionGraphs/${state.replace(" ", "_")}_MLP.png`
);

const PredictionGraph: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={selectedTab} 
          onChange={handleTabChange} 
          aria-label="State Tabs" 
          variant="scrollable" 
          scrollButtons="auto"
        >
          {states.map((state, index) => (
            <Tab key={state} label={state} />
          ))}
        </Tabs>
      </Box>

      {/* Render the image for the selected state */}
      <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
        {/* <h1>{states[selectedTab]}</h1> */}
        <img
          src={stateImages[selectedTab]}
          alt={`${states[selectedTab]}`}
          style={{ maxWidth: '100%', maxHeight: '80%'}} //, borderRadius: '10px', border: '2px solid black' }}
        />
      </Box>
      <Box>
        <h2>State: {states[selectedTab]}</h2>
        <p>
          This is the prediction graph for the state of {states[selectedTab]}. The graph shows the predicted values of healthcare affordability over time, specifically the percentage of people who cannot afford healthcare in the United States over the next 20 years. However, please note that these predictions are based on local trends and may not accurately reflect future trends. There are many factors not accounted for in this model that could affect healthcare affordability in the future. This is just one way to visualize the data and explore potential trends, and could be used as a starting point for further analysis.
        </p>
      </Box>
    </div>
  );
};

export default PredictionGraph;