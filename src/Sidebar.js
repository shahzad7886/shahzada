import React from 'react';
import { Drawer,Grid,Paper, List, ListItem, ListItemText, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { experimentalStyled as styled } from '@mui/material/styles';
const Sidebar = ({ themeColors, theme, changeTheme, isOpen, toggleSidebar,sidebarRef }) => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body1,
        fontWeight: 700,
        padding: theme.spacing(1),
        textAlign: 'center',
        // color: theme.palette.text.info,
        color:'#fff'
      }));

  return (
    <Drawer sx={{ width: '240px', }}
    variant="persistent" anchor="right" open={isOpen} ref={sidebarRef}>
      <div>
        <IconButton onClick={toggleSidebar}>
          <CloseIcon color='#fff'  />
        </IconButton>
      </div>
      {/* <List>
      {Object.entries(themeColors).map(([themeName, color]) => (
          <ListItem
            button
            key={themeName}
            style={{
              backgroundColor: color,
              cursor: 'pointer',
            }}
            onClick={() => changeTheme(color)}
          >
            <ListItemText primary={themeName} />
          </ListItem>
        ))}
      </List> */}

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Object.entries(themeColors).map(([themeName, color]) => (
    <Grid item xs={2} sm={4} md={4} key={themeName}>
      <Item
      button
      key={themeName}
      style={{
        backgroundColor: color,
        cursor: 'pointer',
      }}
      onClick={() => changeTheme(color)}
      >{themeName}</Item>
    </Grid>
  ))}
</Grid>

    </Drawer>
  );
};

export default Sidebar;
