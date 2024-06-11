import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeaderDashboard from './index';
import theme from '@/theme';
import { ThemeProvider } from '@emotion/react';

export default {
  title: 'Components/Header/HeaderDashboard',
  component: HeaderDashboard,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: StoryFn = (args = {}) => <HeaderDashboard {...args} />;

export const Default = Template.bind({});
Default.args = {};
