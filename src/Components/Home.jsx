import { Typography,Box } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <>
     <Box sx={{ bgcolor: '#cfe8fc', height: '65vh',width:"100%",mt:"10px",mb:"10px" }} component="form"
                display="flex"
                justifyContent="center"
                alignItems="center"
                noValidate
                autoComplete="on"
                >
        
           <Typography
           variant='h2'>
              Welcome to My App
           </Typography>
           
           </Box>
    </>
  )
}

export default Home