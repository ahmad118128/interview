import { Box } from '@mui/material';
import { TabPanelProps } from '@/components/BaseComponents/BaseTab/type';

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children && (
        <Box width={1} height={1}>
          {children}
        </Box>
      )}
    </div>
  );
}
