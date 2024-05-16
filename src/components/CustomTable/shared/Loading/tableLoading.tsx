import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import { WaveLoading } from './waveLoading';
import { tablePhrases } from '../../strings';

type PropsType = {
  hedCount?: number;
};

export function TableLoading({ hedCount }: PropsType) {
  return (
    <TableBody>
      <TableRow>
        <TableCell colSpan={hedCount}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            height="18.75rem"
          >
            <WaveLoading />
            <Box mt={7}>{tablePhrases.pleaseBePatient}</Box>
          </Box>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
