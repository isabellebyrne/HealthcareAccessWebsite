import { Grid } from '@mui/material';
import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={2} xl={2}>
      </Grid>
      <Grid item xs={8} xl={8}>
      {children}
      </Grid>
      <Grid item xs={2} xl={2}>
      </Grid>
    </Grid>
  );
};

export default PageWrapper;
