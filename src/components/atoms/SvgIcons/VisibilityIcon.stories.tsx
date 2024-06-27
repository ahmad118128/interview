import { Meta, StoryObj } from '@storybook/react';
import * as react from 'react';
import { ThemeProvider } from '@mui/material';
import theme from '@/theme';
import VisibilityIcon from './VisibilityIcon';

const meta: Meta<typeof VisibilityIcon> = {
  title: 'atoms/VisibilityIcon',
  component: VisibilityIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'This is the VisibilityIcon component.',
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
    width: '',
    height: '',
    color: '',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVisibilityIcon: Story = {
  args: {
    width: '30px',
    height: '30px',
  },
};
