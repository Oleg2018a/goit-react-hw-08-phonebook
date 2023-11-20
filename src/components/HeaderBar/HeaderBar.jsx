import { AppBar, Box } from '@mui/material';
import { AuthNav } from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';

import { useAuth } from 'hooks/useAuth';
import React from 'react'

const HeaderBar = () => {
    const {isLoggedIn} = useAuth()
  return (
    <AppBar
      position="fixed"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', margin:'8px'}}>
        <Navigation />

        {!isLoggedIn && <AuthNav />}
      </Box>
    </AppBar>
  );
}

export default HeaderBar;