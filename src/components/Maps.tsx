import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper.tsx";
import { Tabs, Tab, Box } from "@mui/material";

// List of all 50 states
const years = Array.from({ length: 2024 - 2014 }, (_, i) => (2014 + i).toString());

// Update the image paths to point to the public directory
const stateImages = years.map(
  (state) => `/images/Maps/Map${state}.png`
);

const Maps: React.FC = () => {
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
          {years.map((state, index) => (
            <Tab key={state} label={state} />
          ))}
        </Tabs>
      </Box>

      {/* Render the image for the selected state */}
      <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
        {/* <h1>{states[selectedTab]}</h1> */}
        <img
          src={stateImages[selectedTab]}
          alt={`${years[selectedTab]}`}
          style={{ maxWidth: '100%', maxHeight: '80%'}} //, borderRadius: '10px', border: '2px solid black' }}
        />
      </Box>
      <Box>
        <h5>This visually displays the data from {years[selectedTab]}. The graph shows the percentage of people who cannot afford healthcare in the United States over the next 20 years, the more red the more people cannot afford healthcare. </h5>
        <p>
          
        </p>
      </Box>
    </div>
  );
};

export default Maps;