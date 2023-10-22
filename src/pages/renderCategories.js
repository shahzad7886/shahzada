import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Grid,Card,Typography,CardContent} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const category = [
    {
      title: 'Category 1',
      imageUrl: 'url-to-image-1',
    },
    {
      title: 'Category 2',
      imageUrl: '',
    },
    // Add more categories as needed
  ];


export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
       <Card>
        <CardContent>
         
          {category.imageUrl && <img src={category.imageUrl} alt={category.title} style={{ maxWidth: '100%' }} />}
          <Typography variant="h6" align="center">
            {category.title}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
