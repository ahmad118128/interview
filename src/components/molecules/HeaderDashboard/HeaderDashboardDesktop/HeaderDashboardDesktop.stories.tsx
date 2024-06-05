import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeaderDashboardDesktop from './index';

export default {
  title: 'Components/Header/HeaderDashboard/Desktop',
  component: HeaderDashboardDesktop,
} as Meta;

const Template: StoryFn<any> = (args = {}) => (
  <HeaderDashboardDesktop {...args} />
);

export const Default = Template.bind({});
Default.args = {};
