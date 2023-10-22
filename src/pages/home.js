import React from 'react'
import {Container,Typography,Box, Button} from '@mui/material'
import RenderCategories from './renderCategories.js';
export default function home() {



  return (
    <>
    <Container >
      <Box mt={3} className="background-img" p={3}>
      <Typography variant="h4" sx={{ marginTop: '20px', }}>
      Title of a longer featured blog post
      </Typography>
      <Typography variant='h6' sx={{ marginTop: '20px',width:"500px",}}>
      Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
      </Typography>
      <Button sx={{ marginTop: '20px'}} variant='contained'>See More</Button>
      </Box>
     <RenderCategories/>
    </Container>
  </>
  )
}
