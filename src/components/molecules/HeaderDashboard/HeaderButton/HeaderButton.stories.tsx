import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeaderButton from './index';

export default {
  title: 'Components/Header/HeaderButton',
  component: HeaderButton,
} as Meta;

const Template: StoryFn<any> = (args = {}) => <HeaderButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
