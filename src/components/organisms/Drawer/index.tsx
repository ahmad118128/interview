import DrawerList from './DrawerList';
import { StyledDrawer } from './styled';
import { Box } from '@mui/material';

export default function MyDrawer({
  openDrawer,
  setOpenDrawer,
}: {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <StyledDrawer
      anchor="right"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      <Box className="DrawerListWrapper">
        <DrawerList setOpenDrawer={setOpenDrawer} />
      </Box>
    </StyledDrawer>
  );
}
