import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';
import HeaderDashboardDesktop from '.';

const meta: Meta<typeof HeaderDashboardDesktop> = {
  title: 'Components/Header/HeaderDashboardDesktop',
  component: HeaderDashboardDesktop,
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
  render: (args) => <HeaderDashboardDesktop {...args} />,
};
