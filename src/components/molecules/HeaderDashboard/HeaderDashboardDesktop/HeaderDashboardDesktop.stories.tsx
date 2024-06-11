import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeaderDashboardDesktop from './index';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';

export default {
  title: 'Components/Header/HeaderDashboard/Desktop',
  component: HeaderDashboardDesktop,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ height: '105vh' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<any> = (args = {}) => (
  <HeaderDashboardDesktop {...args} />
);

export const Default = Template.bind({});
Default.args = {};
