import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TimeDatePicker } from '../TimeDatePicker';
import { TProps } from './type';

export default {
  title: 'Components/TimeDatePicker',
  component: TimeDatePicker,
} as Meta;

const Template: StoryFn<TProps> = (args) => <TimeDatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Select Time',
  value: new Date().getTime(),
  onChange: (value: number | null) => {
    console.log(value);
  },
  name: 'timePicker',
};
