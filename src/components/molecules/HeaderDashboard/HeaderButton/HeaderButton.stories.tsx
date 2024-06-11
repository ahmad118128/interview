import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeaderButton from './index';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';

export default {
  title: 'Components/Header/HeaderButton',
  component: HeaderButton,
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

const Template: StoryFn<any> = (args = {}) => <HeaderButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
