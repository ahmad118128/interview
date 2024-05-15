import CircularProgress from '@mui/material/CircularProgress';
import { CircularProgressProps } from '@mui/material/CircularProgress';
interface ICircularLoading {
  size?: string | number;
  color?: CircularProgressProps['color'];
}
export const CircularLoading = ({ size, color }: ICircularLoading) => {
  return <CircularProgress size={size} color={color} />;
};
