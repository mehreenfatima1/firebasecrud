
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';


import AdbIcon from '@mui/icons-material/Adb';


const Footer = () => {
  return (
    <>
  <AppBar position="sticky" >
  <Container 
    maxWidth="xl"
    sx={{ 
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center', 
      height: '64px' 
    }}
  >
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="#app-bar-with-responsive-menu"
      sx={{
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      Footer
    </Typography>
  </Container>
</AppBar>

    </>
  )
}

export default Footer