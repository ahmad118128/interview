import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';
import LineChart from '.';

const meta: Meta<typeof LineChart> = {
  title: 'organism/LineChart',
  component: LineChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'This is the DoughnutChart component.',
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
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const GeneralStr: Story = {
  args: {
    labels: ['January', 'February', 'March', 'April'],
    data: [0, 120, 40, 90],
  },
};
