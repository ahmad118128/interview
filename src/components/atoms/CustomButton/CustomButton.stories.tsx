import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';
import { CustomButton } from '.';
import { IconButton } from './IconButton';

const meta: Meta<typeof CustomButton> = {
  title: 'atoms/CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'This is the CustomButton component.',
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    children: 'Custom Button',
    loading: false,
    loadingText: false,
    type: 'button',
    variant: 'outlined',
    disableElevation: false,
    size: 'large',
    onClick: () => {},
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  args: {
    loading: false,
    type: 'button',
  },
};

export const LoadingText: Story = {
  args: {
    loadingText: false,
    type: 'button',
    variant: 'contained',
  },
};

export const CustomIconButton: Story = {
  args: {
    children: <IconButton iconName="streamline:delete-1" size="medium" />,
    loading: false,
    loadingText: false,
    type: 'button',
    variant: 'outlined',
    size: 'large',
  },
};
