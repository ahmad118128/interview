import React from 'react';
import { IconButton, useTheme, TableCell, Collapse } from '@mui/material';
import { Icon } from '@iconify/react';

import { CustomCell } from '../CustomCell';
import { CellType, CollapseRowProps, RowType } from './type';
import { StyledCollapseChildrenTableRow, StyledTableRow } from './styled';

export const CollapseRow = (props: CollapseRowProps) => {
  const { headers, collapseChildren, row, HandleSelectedRow, checkCollapseId } =
    props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const headersId = headers.filter((item: any) => {
    return item.id !== '';
  });

  const arrowDownIcon = (
    <Icon icon="ic:baseline-keyboard-arrow-down" width={24} />
  );
  const arrowLeftIcon = (
    <Icon icon="ic:outline-keyboard-arrow-left" width={24} />
  );

  return (
    <>
      <StyledTableRow expand={open} sx={{ '& > *': { borderBottom: 'none' } }}>
        <TableCell>
          {!checkCollapseId ? (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => {
                setOpen(!open);
                HandleSelectedRow && HandleSelectedRow(row?.id);
              }}
            >
              {open ? arrowDownIcon : arrowLeftIcon}
            </IconButton>
          ) : (
            row[checkCollapseId].length > 0 && (
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => {
                  setOpen(!open);
                  HandleSelectedRow && HandleSelectedRow(row?.id);
                }}
              >
                {open ? arrowDownIcon : arrowLeftIcon}
              </IconButton>
            )
          )}
        </TableCell>

        {headersId?.map((cell: CellType, i: number) => {
          const cellId = cell?.id as keyof RowType;
          const cellValue = row[cellId];

          return cell?.type ? (
            CustomCell({ row, cell })
          ) : (
            <TableCell key={cell.id} align="center">
              {cellValue}
            </TableCell>
          );
        })}
      </StyledTableRow>
      {collapseChildren && (
        <StyledCollapseChildrenTableRow>
          <TableCell colSpan={headers.length}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              {collapseChildren}
            </Collapse>
          </TableCell>
        </StyledCollapseChildrenTableRow>
      )}
    </>
  );
};
