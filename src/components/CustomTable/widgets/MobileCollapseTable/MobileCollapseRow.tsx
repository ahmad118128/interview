import { useState } from 'react';
import { Icon } from '@iconify/react';
import {
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  TableCell,
  TableRow,
} from '@mui/material';

import { CustomCell } from '../../shared/CustomCell';
import {
  StyledCollapse,
  StyledIconCheckboxTableCell,
  StyledMobileList,
  StyledMobileListCellLabel,
  StyledMobileListCellValue,
} from './styled';
import { type CellType, type RowType } from '../../types';
import { MobileCollapseRowProps } from './type';

const COLLAPSE_ID = 'collapse';

export const MobileCollapseRow = (props: MobileCollapseRowProps) => {
  const { row, header, collapseData } = props;
  const theme = useTheme();
  const breakPointUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(false);

  const filteredHeader = header.filter((item: CellType) => {
    return item?.id !== COLLAPSE_ID && item?.id !== undefined;
  });

  return (
    <>
      <TableRow>
        {breakPointUpMd ? null : (
          <StyledIconCheckboxTableCell>
            {!breakPointUpMd && (
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <Icon
                    icon="iconamoon:arrow-down-2"
                    color={theme.palette.grey[300]}
                  />
                ) : (
                  <Icon
                    icon="iconamoon:arrow-left-2"
                    color={theme.palette.grey[300]}
                  />
                )}
              </IconButton>
            )}
          </StyledIconCheckboxTableCell>
        )}
        {filteredHeader?.map((cell: CellType) => {
          const cellId = cell?.id as keyof RowType;
          const cellValue = row[cellId];

          return cell?.type ? (
            CustomCell({ row, cell })
          ) : (
            <TableCell key={cell?.id} align="center">
              <Typography variant="body1">{cellValue}</Typography>
            </TableCell>
          );
        })}
      </TableRow>
      {breakPointUpMd ? null : (
        <TableRow>
          <TableCell colSpan={header.length}>
            <StyledCollapse in={open} timeout="auto" unmountOnExit>
              {collapseData?.map((cell: CellType) => {
                const cellId = cell?.id as keyof RowType;
                const cellValue = row[cellId];

                return (
                  <StyledMobileList key={cell?.id}>
                    <StyledMobileListCellLabel>
                      {cell?.label}
                    </StyledMobileListCellLabel>
                    <StyledMobileListCellValue>
                      {cell?.type ? CustomCell({ row, cell }) : cellValue}
                    </StyledMobileListCellValue>
                  </StyledMobileList>
                );
              })}
            </StyledCollapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};
