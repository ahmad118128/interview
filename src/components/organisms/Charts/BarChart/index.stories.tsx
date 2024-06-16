import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BarChart } from '.';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';

const meta: Meta<typeof BarChart> = {
  title: 'organism/BarChart',
  component: BarChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'This is the BarChart component.',
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
    labels: [],
    data: [],
    legend: false,
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const StateList: Story = {
  args: {
    labels: ['January', 'February', 'March', 'April'],
    data: [{ label: 'مرد', data: [120, 130, 140, 15] }],
  },
};

export const AgeRange: Story = {
  args: {
    labels: ['January', 'February', 'March', 'April'],
    data: [
      { label: 'مرد', data: [120, 130, 140, 15] },
      { label: 'زن', data: [30, 40, 50, 120] },
    ],
    legend: true,
  },
};
