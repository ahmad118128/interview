import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { CustomTooltip } from '.';
import theme from '@/theme';

const meta: Meta<typeof CustomTooltip> = {
  title: 'Components/CustomTooltip',
  component: CustomTooltip,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <CustomTooltip {...args}>
      <span>Hover over me</span>
    </CustomTooltip>
  ),
  args: {
    title: 'CustomTooltip',
    arrow: true,
    placement: 'top',
  },
};
export const ArrowOff: Story = {
  render: (args) => (
    <CustomTooltip {...args}>
      <span>Hover over me</span>
    </CustomTooltip>
  ),
  args: {
    title: 'CustomTooltip',
    arrow: false,
    placement: 'top',
  },
};
export const PlacementLeft: Story = {
  render: (args) => (
    <CustomTooltip {...args} style={{ marginLeft: '100px' }}>
      <span>Hover over me</span>
    </CustomTooltip>
  ),
  args: {
    title: 'CustomTooltip',
    arrow: false,
    placement: 'left',
  },
};
export const PlacementRight: Story = {
  render: (args) => (
    <CustomTooltip {...args}>
      <span>Hover over me</span>
    </CustomTooltip>
  ),
  args: {
    title: 'CustomTooltip',
    arrow: false,
    placement: 'right',
  },
};
export const PlacementBottom: Story = {
  render: (args) => (
    <CustomTooltip {...args}>
      <span>Hover over me</span>
    </CustomTooltip>
  ),
  args: {
    title: 'CustomTooltip',
    arrow: false,
    placement: 'bottom',
  },
};
