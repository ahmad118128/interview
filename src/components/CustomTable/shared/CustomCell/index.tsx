import TableCell from '@mui/material/TableCell';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import jMoment from 'moment-jalaali';
import { ECellTypes, RowType, type GetCellTableProps } from './types';

export const CustomCell = (props: GetCellTableProps) => {
  const { row, cell } = props;
  const cellId = cell.id as keyof RowType;
  const cellValue = row[cellId] ?? '-';

  let Cell = <TableCell />;

  switch (cell.type) {
    case ECellTypes.NUMBER:
      Cell = <TableCell align="center">{cellValue}</TableCell>;
      break;

    case ECellTypes.DATE:
      Cell = (
        <TableCell align="center">
          {cellValue && cellValue !== ''
            ? jMoment(cellValue).format('jYYYY/jM/jD')
            : '-'}
        </TableCell>
      );
      break;

    case ECellTypes.DATE_HOUR:
      Cell = (
        <TableCell align="center">
          {cellValue && cellValue !== ''
            ? jMoment(cellValue).format('HH:mm:ss jYYYY-jMM-jDD')
            : '-'}
        </TableCell>
      );
      break;

    case ECellTypes.FUNCTION:
      if (cell?.function) {
        Cell = cell.function(row);
      }
      break;

    case ECellTypes.COMPONENT:
      Cell = cell.component ?? <TableCell />;
      break;

    case ECellTypes.EDIT:
      Cell = (
        <TableCell align="center">
          <a>
            <Link
              href={{
                pathname: `${cell?.editLink}`,
                query: { id: row.id },
              }}
            >
              <Icon icon="la:edit" width="28px" />
            </Link>
          </a>
        </TableCell>
      );
      break;

    case ECellTypes.DELETE:
      Cell = <TableCell align="center">delete</TableCell>;
      break;

    case ECellTypes.EDIT_AND_DELETE:
      Cell = <TableCell align="center">editAndDelete</TableCell>;
      break;

    default:
      break;
  }

  return Cell;
};
