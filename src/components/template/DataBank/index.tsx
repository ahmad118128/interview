'use client';
import { CellType } from '@/components/CustomTable/types';
import { CustomTab } from '@/components/molecules/CustomTab/styled';
import {
  headers,
  mockData,
} from '@/components/pages/dashboard/image-recognition/constants';
import TableWithFab from '@/components/template/TableWithFab';
import { DataBankRoute, commonWords } from '@/strings';
import theme from '@/theme';
import { Icon } from '@iconify/react/dist/iconify.js';
import { TableCell, Typography } from '@mui/material';

export default function DatabankTemplate() {
  const tableHeads: CellType[] = [
    ...headers,
    {
      id: 'actions',
      label: commonWords.action,
      type: 'function',
      function: (row) => (
        <TableCell>
          <Icon
            icon="ic:baseline-delete"
            width="24"
            height="24"
            color={theme.palette.primary.main}
            style={{ marginLeft: '0.5rem' }}
          />
          <Icon
            icon="ep:picture-filled"
            width="24"
            height="24"
            color={theme.palette.primary.main}
          />
        </TableCell>
      ),
    },
  ];

  const tabs = [
    {
      id: 0,
      label: <Typography>{DataBankRoute.usersList}</Typography>,
      disableTabRipple: false,
      tabPanel: <TableWithFab tableHeads={tableHeads} data={mockData} />,
    },
    {
      id: 1,
      label: <Typography>{DataBankRoute.groupList}</Typography>,
      disableTabRipple: false,
      tabPanel: <TableWithFab tableHeads={tableHeads} data={mockData} />,
    },
  ];

  return (
    <>
      <CustomTab data={tabs} type={'normalTab'}></CustomTab>
    </>
  );
}
