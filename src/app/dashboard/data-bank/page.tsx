'use client';
import { CellType } from '@/components/CustomTable/types';
import {
  headers,
  mockData,
} from '@/components/pages/dashboard/image-recognition/constants';
import TableWithFab from '@/components/template/TableWithFab';
import { commonWords } from '@/strings';
import theme from '@/theme';
import { Icon } from '@iconify/react/dist/iconify.js';
import { TableCell } from '@mui/material';

export default function Databank() {
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

  return <TableWithFab tableHeads={tableHeads} data={mockData} />;
}
