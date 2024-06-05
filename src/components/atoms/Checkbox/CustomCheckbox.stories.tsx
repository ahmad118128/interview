import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { CustomCheckbox } from './CustomCheckbox/CustomCheckbox';
import { ICustomCheckboxProps } from './CustomCheckbox/type';

export default {
  title: 'Components/Checkbox/CustomCheckbox',
  component: CustomCheckbox,
} as Meta;

const Template: StoryFn<ICustomCheckboxProps> = (args) => (
  <CustomCheckbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  checked: false,
  error: false,
  onChange: (event) => {
    console.log(event?.target.checked);
  },
};
