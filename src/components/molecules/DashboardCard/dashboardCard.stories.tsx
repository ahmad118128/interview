import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DashboardCard from '.';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';

const meta: Meta<typeof DashboardCard> = {
  title: 'dashboard',
  component: DashboardCard,
  args: {
    count: '',
    src: '',
    title: '',
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is the default state of the `Dashboard card` component.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Dashboard card in default state.',
      },
    },
  },
  render: (args) => {
    return <DashboardCard {...args} />;
  },
};
