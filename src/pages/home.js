import { Button, Container,Typography,Grid,Card,CardMedia,CardContent} from '@mui/material'
// import Navbar from '../component/appbar'
import React from 'react'

export default function home() {
  return (
    <div>
    
    <Container>
      <Typography variant="h4" style={{ marginTop: '20px' }}>
        Featured Products
      </Typography>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              style={{ height: 140 }}
              image="product-image-url"
              title="Product Title"
            />
            <CardContent>
              <Typography variant="h6">Product Title</Typography>
              <Typography variant="body2" color="textSecondary">
                Product Description
              </Typography>
              <Typography variant="h6">$99.99</Typography>
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
        {/* Add more products in a similar manner */}
      </Grid>
    </Container>
  </div>
  )
}
