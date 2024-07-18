import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'atoms/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'This is the IconButton component.',
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
    tooltip: '',
    iconName: '',
    disabled: false,
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const CloseIconButton: Story = {
  args: {
    tooltip: 'close',
    iconName: 'iconamoon:close',
    disabled: false,
  },
};
