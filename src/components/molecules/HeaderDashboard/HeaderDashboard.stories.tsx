import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeaderDashboard from './index';

export default {
  title: 'Components/Header/HeaderDashboard',
  component: HeaderDashboard,
} as Meta;

const Template: StoryFn<any> = (args = {}) => <HeaderDashboard {...args} />;

export const Default = Template.bind({});
Default.args = {};
