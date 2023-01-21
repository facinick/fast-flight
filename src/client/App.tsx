import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Pages
import AirplaneSearch from './components/search';
import './styles/search.css'
import './styles/app.css'

export const App = () => {

  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AirplaneSearch />
      </Box>
    </BrowserRouter>
  );
};
