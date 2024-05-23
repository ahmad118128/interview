import Drawer from '@mui/material/Drawer';
import { Dispatch } from 'react';
import DrawerList from './DrawerList';
import { StyledDrawer } from './styled';
import { Box } from '@mui/material';

export default function MyDrawer({
  openDrawer,
  setOpenDrawer,
}: {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<boolean>;
}) {
  return (
    <StyledDrawer
      anchor="right"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      <Box className="ref">
        <DrawerList setOpenDrawer={setOpenDrawer} />
      </Box>
    </StyledDrawer>
  );
}
