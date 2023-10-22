import React from 'react'
import {Container,Typography,Box, Button} from '@mui/material'
import RenderCategories from './renderCategories.js';
export default function home() {



  return (
    <>
    <Container >
      <Box mt={3} className="background-img" p={3}>
      <Typography variant="h4" sx={{ marginTop: '50px', }}>
     React Js Ecommerce  Template
      </Typography>
      <Typography variant='h6' sx={{ marginTop: '20px',width:"500px",}}>
      All You Need to Build a Market Website
      </Typography>
      <Button sx={{ marginTop: '20px'}} variant='contained'>See More</Button>
      </Box>
     <RenderCategories/>
    </Container>
  </>
  )
}
