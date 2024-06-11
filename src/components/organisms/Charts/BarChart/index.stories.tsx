import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { BarChart } from '.';
import { BarChartProps } from './types';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';

export default {
  title: 'BarChart',
  component: BarChart,
  decorators:[(Story)=> (<ThemeProvider theme={theme}><Story /></ThemeProvider>)]
} as Meta;

const Template: StoryFn<BarChartProps> = (args) => {
  return <BarChart {...args} />;
};

export const stateList = Template.bind({});
stateList.args = {
  labels: ['January', 'February', 'March', 'April'],
  data: [{ label: 'مرد', data: [120, 130, 140, 15] }],
  legend: false,
};

export const ageRange = Template.bind({});
ageRange.args = {
  labels: ['January', 'February', 'March', 'April'],
  data: [
    { label: 'مرد', data: [120, 130, 140, 15] },
    { label: 'زن', data: [30, 40, 50, 120] },
  ],
  legend: true,
};
