import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { CustomCheckbox } from './CustomCheckbox';
import theme from '@/theme';

const meta: Meta<typeof CustomCheckbox> = {
  title: 'Components/Checkbox/CustomCheckbox',
  component: CustomCheckbox,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    disabled: false,
    checked: false,
    error: false,
    onChange: (event) => {
      console.log(event?.target.checked);
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <CustomCheckbox {...args} />,
};
export const Disabled: Story = {
  render: (args) => <CustomCheckbox {...args} />,
  args: {
    disabled: true,
  },
};
export const Checked: Story = {
  render: (args) => <CustomCheckbox {...args} />,
  args: {
    checked: true,
  },
};
export const Error: Story = {
  render: (args) => <CustomCheckbox {...args} />,
  args: {
    error: true,
  },
};
