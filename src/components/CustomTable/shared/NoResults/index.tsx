import Image from 'next/image';
import { Grid, TableBody, TableCell, Typography } from '@mui/material';

import { StyledTableRow } from './styled';
import { tablePhrases } from '../../strings';

type Props = {
  title?: string;
  headCount: number;
};

export const TableNoResults = (props: Props) => {
  const { title = tablePhrases.notFound, headCount } = props;

  return (
    <TableBody>
      <StyledTableRow>
        <TableCell colSpan={headCount}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            rowGap={5}
            marginY="3rem"
          >
            <Image
              src="/assets/images/dashboard/imageRecognition/noResult.svg"
              width={181}
              height={188}
              alt={title}
            />
            <Typography variant="button">{title}</Typography>
          </Grid>
        </TableCell>
      </StyledTableRow>
    </TableBody>
  );
};
