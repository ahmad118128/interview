import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { TimeDatePicker } from '../TimeDatePicker';
import theme from '@/theme';

const meta: Meta<typeof TimeDatePicker> = {
  title: 'Components/TimeDatePicker/TimeDatePicker',
  component: TimeDatePicker,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    name: 'TimeDatePicker',
    label: 'Select Time',
    value: new Date().getTime(),
    onChange: (value: number | null) => {
      console.log(value);
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <TimeDatePicker {...args} />,
};
export const ReadOnly: Story = {
  render: (args) => <TimeDatePicker {...args} />,
  args: {
    readOnly: true,
  },
};
export const Disabled: Story = {
  render: (args) => <TimeDatePicker {...args} />,
  args: {
    disabled: true,
  },
};
export const DisablePast: Story = {
  render: (args) => <TimeDatePicker {...args} />,
  args: {
    disablePast: true,
  },
};
export const DisableFuture: Story = {
  render: (args) => <TimeDatePicker {...args} />,
  args: {
    disableFuture: true,
  },
};
