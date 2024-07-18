import { TableCell, IconButton, useTheme, Collapse } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify.js';
import { CustomCheckbox } from '@/components/atoms/Checkbox';

import { type CellType, type RowType } from '../CollapseTable/type';
import { SelectTableRowProps } from './type';
import { CustomCell } from '../CustomCell';
import {
  StyledCollapseChildrenTableRow,
  StyledTableRow,
} from '../CollapseTable/styled';
import { useState } from 'react';
import { StyledTableCell } from './styled';

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

  const ArrowDownIcon = (
    <Icon icon="ic:baseline-keyboard-arrow-down" width={24} />
  );
  const ArrowLeftIcon = (
    <Icon icon="ic:outline-keyboard-arrow-left" width={24} />
  );

  return (
    <>
      <StyledTableRow expand={open}>
        <StyledTableCell>
          {!checkCollapseId ? (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => {
                setOpen(!open);
                HandleSelectedRow && HandleSelectedRow(row?.id);
              }}
            >
              {open ? ArrowDownIcon : ArrowLeftIcon}
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
                {open ? ArrowDownIcon : ArrowLeftIcon}
              </IconButton>
            )
          )}

          {selectedMode && (
            <CustomCheckbox
              checked={activeIndex.includes(row?.id)}
              onChange={HandleCheckBoxChange}
              id={`custom-checkbox-${row?.id}`}
            />
          )}
        </StyledTableCell>

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
          <TableCell colSpan={header.length + 1}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              {collapseChildren}
            </Collapse>
          </TableCell>
        </StyledCollapseChildrenTableRow>
      )}
    </>
  );
};
