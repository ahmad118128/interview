import { Meta, StoryObj } from '@storybook/react';
import { BaseTable } from '.';
import { ThemeProvider } from '@mui/material';
import theme from '@/theme';
import { MobileCollapseRow } from '../../widgets/MobileCollapseTable/MobileCollapseRow';

const meta: Meta<typeof BaseTable> = {
  title: 'atoms/BaseTable',
  component: BaseTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'This is the BaseTable component.',
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
    headers: [
      { id: '1', editLink: '', label: '', sortable: false, headOptions: '' },
      { id: '2', editLink: '', label: '', sortable: false, headOptions: '' },
      { id: '3', editLink: '', label: '', sortable: false, headOptions: '' },
    ],
    rows: '3',
    handleSort: () => {},
    error: false,
    pagination: {
      setPage: () => {},
      current: 2,
      all_page: 7,
    },
    children: '',
    emptyDataMessage: 'there is no data',
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const defaultBaseTable: Story = {
  args: {
    headers: [
      {
        id: '1',
        editLink: '',
        label: 'name',
        sortable: false,
        headOptions: '',
      },
      {
        id: '2',
        editLink: '',
        label: 'lname',
        sortable: false,
        headOptions: '',
      },
      { id: '3', editLink: '', label: 'job', sortable: false, headOptions: '' },
    ],
    rows: [{ id: '1', cellId: '1', job: 'amir' }],
    handleSort: () => {},
    error: false,
    pagination: {
      setPage: () => {},
      current: 2,
      all_page: 7,
    },
    emptyDataMessage: 'there is no data',
  },
};
