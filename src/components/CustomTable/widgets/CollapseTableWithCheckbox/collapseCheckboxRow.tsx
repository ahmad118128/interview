import {
  TableCell,
  TableRow,
  Checkbox,
  IconButton,
  useTheme,
  Collapse,
} from '@mui/material';

import { type CellType, type RowType } from '../CollapseTable/type';
import { SelectTableRowProps } from './type';
import { StyledIconCheckboxTableCell } from './styled';
import { CustomCell } from '../CustomCell';
import { Icon } from '@iconify/react/dist/iconify.js';
import {
  StyledCollapseChildrenTableRow,
  StyledTableRow,
} from '../CollapseTable/styled';
import { useState } from 'react';

const COLLAPSE_ID = 'collapse';

export const CollapseCheckboxRow = (props: SelectTableRowProps) => {
  const {
    row,
    header,
    HandleCheckBoxChange,
    activeIndex,
    selectedMode,
    collapseChildren,
    HandleSelectedRow,
    checkCollapseId,
  } = props;

  const filteredHeader = header.filter((item: CellType) => {
    return item?.id !== COLLAPSE_ID && item?.id !== undefined;
  });

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const headersId = header.filter((item: any) => {
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
        {selectedMode && (
          <StyledIconCheckboxTableCell>
            <Checkbox
              checked={activeIndex.includes(row?.id)}
              onChange={HandleCheckBoxChange}
              id={`custom-checkbox-${row?.id}`}
              size="small"
            />
          </StyledIconCheckboxTableCell>
        )}

        {filteredHeader?.map((cell: CellType) => {
          const cellId = cell?.id as keyof RowType;
          const cellValue = row[cellId];

          return cell?.type ? (
            CustomCell({ row, cell })
          ) : (
            <TableCell key={cell?.id} align="center">
              {cellValue}
            </TableCell>
          );
        })}
      </StyledTableRow>
      {collapseChildren && (
        <StyledCollapseChildrenTableRow>
          <TableCell colSpan={header.length}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              {collapseChildren}
            </Collapse>
          </TableCell>
        </StyledCollapseChildrenTableRow>
      )}
    </>
  );
};
