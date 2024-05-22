import Drawer from '@mui/material/Drawer';
import { Dispatch } from 'react';
import DrawerList from './DrawerList';

export default function MyDrawer({
  openDrawer,
  setOpenDrawer,
}: {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<boolean>;
}) {
  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      <DrawerList />
    </Drawer>
  );
}
