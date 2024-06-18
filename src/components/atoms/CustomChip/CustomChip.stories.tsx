import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CustomChip } from '.';
import { ThemeProvider } from '@mui/material';
import theme from '@/theme';
import { ClearIcon } from '@mui/x-date-pickers';

const meta: Meta<typeof CustomChip> = {
  title: 'atoms/CustomChip',
  component: CustomChip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'This is the CustomChip component.',
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
    typeChip: '',
    chipSize: 'medium',
    label: false,
    disabled: false,
    ltr: false,
    variant: 'filled',
    onDelete: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCustomChip: Story = {
  args: {
    typeChip: 'baseChip',
    chipSize: 'medium',
    label: false,
    disabled: false,
    ltr: false,
    variant: 'filled',
  },
};

export const DeleteCustomChip: Story = {
  args: {
    typeChip: '',
    deleteIcon: <ClearIcon fontSize="small" />,
    variant: 'outlined',
    onDelete: () => {},
  },
};
