import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import HeaderDashboard from '.';
import theme from '@/theme';

const meta: Meta<typeof HeaderDashboard> = {
  title: 'Components/Header/HeaderDashboard',
  component: HeaderDashboard,
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
  render: (args) => <HeaderDashboard {...args} />,
};
