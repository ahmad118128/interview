import { Meta, StoryObj } from '@storybook/react';
import { BaseTable } from '../../shared/TableCore';
import { TableCell, ThemeProvider } from '@mui/material';
import theme from '@/theme';
import { MobileCollapseTable } from '.';
import { CellType } from '../../shared/CustomCell/types';
import {
  COLLAPSE_ID,
  headers,
} from '@/components/pages/dashboard/image-recognition/constants';
import { commonWords, generalStr } from '@/strings';
import { Icon } from '@iconify/react/dist/iconify.js';

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
          style={{ marginLeft: '0.2rem' }}
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

const meta: Meta<typeof MobileCollapseTable> = {
  title: 'atoms/MobileCollapseTable',
  component: MobileCollapseTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'This is the MobileCollapseTable component.',
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    headers: tableHeads,
    rows: [
      {
        id: 1,
        description: 'tested',
        matchCount: 3,
      },

      {
        id: 2,
        description: 'tested',
        matchCount: 7,
      },

      {
        id: 3,
        description: 'notTested',
        matchCount: 3,
      },
    ],
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultMobileCollapseTable: Story = {
  args: {
    headers: [
      {
        id: 'description',
        label: generalStr.description,
      },
      {
        id: 'matchCount',
        label: generalStr.matchCount,
        type: 'number',
        sortable: true,
      },
    ],
    rows: [
      {
        id: 1,
        description: 'tested',
        matchCount: 3,
      },

      {
        id: 2,
        description: 'tested',
        matchCount: 7,
      },

      {
        id: 3,
        description: 'notTested',
        matchCount: 3,
      },
    ],
    handleSort: () => {},
    error: false,
    pagination: {
      totalPages: 4,
      page: 1,
      setPageParams: () => {},
      pageParams: { page: 1 },
    },
    mobileIdFilter: [COLLAPSE_ID, 'description', 'matchCount'],
    emptyDataMessage: 'there is no data',
  },
};
