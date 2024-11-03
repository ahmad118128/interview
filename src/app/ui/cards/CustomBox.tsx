import { Box } from '@mui/material';

const CustomBox = ({ title }: { title: string }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="gray"
      color="white"
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      {title}
    </Box>
  );
};

export default CustomBox;
