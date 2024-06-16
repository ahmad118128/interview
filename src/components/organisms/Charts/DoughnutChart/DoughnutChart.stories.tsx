import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';
import DoughnutChart from '.';

const meta: Meta<typeof DoughnutChart> = {
  title: 'organism/DoughnutChart',
  component: DoughnutChart,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: 'This is the DoughnutChart component.',
      },
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    chartLabel: '',
    labels: [],
    data: [],
  }
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>

export const Client: Story = {
  args: {
    chartLabel: 'Client',
    labels: ['نامشخص', 'شناسایی شده'],
    data: [120, 80],
  },
}

export const Data: Story = {
  args: {
    chartLabel: 'Data',
    labels: ['زن', 'مرد'],
    data: [120, 80],
  }
};
