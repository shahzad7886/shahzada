// import React from 'react';
// import { Drawer, List, ListItem, ListItemIcon,Box, ListItemText, IconButton, Button } from '@mui/material';
// import PaletteIcon from '@mui/icons-material/Palette';
// import CloseIcon from '@mui/icons-material/Close';
// const Sidebar = ({  themeColors, changeTheme, theme, isOpen, toggleSidebar  }) => {
//   return (
//     <Drawer variant="temporary" open={isOpen}>
//       <IconButton   onClick={toggleSidebar}>
//         <CloseIcon />
//       </IconButton>
// <List>
//         {themeColors.map((color, index) => (
//           <ListItem
//             button
//             key={index}
//             style={{
//               backgroundColor: color,
//               cursor: 'pointer',
//               width:"100px",
//               height:"100px",
//             }}
//             onClick={() => changeTheme(color)}>
// <ListItemText primary={theme.name} />
//           </ListItem>
//         ))}
//       </List>

//     </Drawer>
//   );
// };

// export default Sidebar;

import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = ({ themeColors, theme, changeTheme, isOpen, toggleSidebar,sidebarRef }) => {
  return (
    <Drawer variant="persistent" anchor="right" open={isOpen} ref={sidebarRef}>
      <div>
        <IconButton onClick={toggleSidebar}>
          <CloseIcon />
        </IconButton>
      </div>
      <List>
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
      </List>
    </Drawer>
  );
};

export default Sidebar;
