import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Box, Button, Toolbar } from '@mui/material';
import URLHelpers from 'helpers/url';
import { StyledImage, StyledAppBar, StyledWrapper } from './styles';

const Main = () => (
  <div className="main-root">
    <StyledAppBar position="static" color="primary">
      <div className="main-container">
        <Toolbar disableGutters>
          <StyledImage className="image" src="/favicon.ico" alt="logo" />

          <Box sx={{ marginLeft: 2, flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            <Button color="info" component={Link} to={URLHelpers.parking}>
              Parking Allocation System
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, mr: 2 }} />

          <Box sx={{ flexGrow: 0 }} />
        </Toolbar>
      </div>
    </StyledAppBar>
    <StyledWrapper>
      <Outlet />
    </StyledWrapper>
  </div>
);

export default Main;
