import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper.tsx';
import NeuralNet from '../components/NeuralNet.tsx';
import DataText from '../components/DataText.tsx';
import { Tabs, Tab, Box } from '@mui/material';
import Motivation from '../components/Motivation.tsx';

const About: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <PageWrapper>
      <Motivation />
      <hr />
      <Box sx={{ width: '100%' }}>
        <Tabs value={selectedTab} onChange={handleTabChange} centered>
          <Tab label='The Data' />
          <Tab label='The Neural Network' /> 
        </Tabs>
        {selectedTab === 1 && (
          <Box sx={{ p: 0 }}>
            <NeuralNet />
          </Box>
        )}
        {selectedTab === 0 && (
          <Box sx={{ p: 0 }}>
            <DataText />
          </Box>
        )}
      </Box>
    </PageWrapper>
  );
};

export default About;
