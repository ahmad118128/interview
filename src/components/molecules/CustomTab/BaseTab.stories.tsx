import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { Typography } from '@mui/material';
import theme from '@/theme';
import CustomTab from '@/components/molecules/CustomTab/styled';

const meta: Meta<typeof CustomTab> = {
  title: 'molecules/BaseTab',
  component: CustomTab,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    data: [
      {
        id: 0,
        label: 'Tab 1',
        tabPanel: <Typography>First Tab Content</Typography>,
      },
      {
        id: 1,
        label: 'Tab 2',
        tabPanel: <Typography>Second Tab Content</Typography>,
      },
      {
        id: 2,
        label: 'Tab 3',
        tabPanel: <Typography>Third Tab Content</Typography>,
      },
    ],
    activeId: 0,
    type: 'normalTab',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonTab: Story = {
  render: (args) => <CustomTab {...args} />,
  args: {
    type: 'buttonTab',
  },
};
export const NormalTab: Story = {
  render: (args) => <CustomTab {...args} />,
  args: {
    type: 'normalTab',
  },
};
