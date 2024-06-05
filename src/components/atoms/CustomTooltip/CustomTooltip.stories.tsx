import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { CustomTooltip } from './index';
import { TooltipProps } from '@mui/material';

export default {
  title: 'Components/CustomTooltip',
  component: CustomTooltip,
} as Meta;

const Template: StoryFn<TooltipProps> = (args: TooltipProps) => (
  <CustomTooltip {...args}>
    <span>Hover over me</span>
  </CustomTooltip>
);

export const Default = Template.bind({});
Default.args = {
  title: 'This is a custom tooltip',
  arrow: true,
  placement: 'top',
};
