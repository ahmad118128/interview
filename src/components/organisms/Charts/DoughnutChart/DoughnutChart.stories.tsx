import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';
import DoughnutChart from '.';
import { DoughnutChartProps } from './type';

export default {
  title: 'DoughnutChart',
  component: DoughnutChart,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<DoughnutChartProps> = (args) => {
  return <DoughnutChart {...args} />;
};

export const Client = Template.bind({});
Client.args = {
  chartLabel: 'Client',
  labels: ['نامشخص', 'شناسایی شده'],
  data: [120, 80],
};

export const Data = Template.bind({});
Data.args = {
  chartLabel: 'Data',
  labels: ['زن', 'مرد'],
  data: [120, 80],
};
