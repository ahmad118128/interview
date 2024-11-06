import React from 'react';
import { Drawer, Toolbar, List, ListItem, ListItemText, Checkbox, Box } from '@mui/material';

const drawerWidth = 240;

interface SidebarProps {
  selectedBoxes: boolean[];
  setSelectedBoxes: React.Dispatch<React.SetStateAction<boolean[]>>; 
}

const Sidebar: React.FC<SidebarProps> = ({ selectedBoxes, setSelectedBoxes }) => {
  const handleCheckboxChange = (index: number): void => {
    const updatedSelectedBoxes = [...selectedBoxes];
    updatedSelectedBoxes[index] = !updatedSelectedBoxes[index];
    setSelectedBoxes(updatedSelectedBoxes);
  };

  return (
    <Drawer
      anchor="right"
      variant="permanent"
      sx={{
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          position: 'relative',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {[...Array(16)].map((_, index) => (
            <ListItem key={index} button onClick={() => handleCheckboxChange(index)}>
              <Checkbox checked={selectedBoxes[index]} /> 
              <ListItemText primary={`Box ${index + 1}`} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
