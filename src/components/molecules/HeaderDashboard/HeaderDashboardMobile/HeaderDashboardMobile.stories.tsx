import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeaderDashboardMobile from './index';

export default {
  title: 'Components/Header/HeaderDashboard/Mobile',
  component: HeaderDashboardMobile,
} as Meta;

const Template: StoryFn<any> = (args = {}) => (
  <HeaderDashboardMobile {...args} />
);

export const Default = Template.bind({});
Default.args = {};
