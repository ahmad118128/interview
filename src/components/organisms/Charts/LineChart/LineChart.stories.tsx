import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';
import LineChart from '.';
import { LineChartProps } from './type';

export default {
  title: 'LineChart',
  component: LineChart,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<LineChartProps> = (args) => {
  return <LineChart {...args} />;
};

export const GeneralStr = Template.bind({});
GeneralStr.args = {
  labels: ['January', 'February', 'March', 'April'],
  data: [0, 120, 40, 90],
};
