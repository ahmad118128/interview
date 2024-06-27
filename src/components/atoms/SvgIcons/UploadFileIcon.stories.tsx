import { Meta, StoryObj } from '@storybook/react';
import * as react from 'react';
import UploadFileIcon from './UploadFileIcon';
import { ThemeProvider } from '@mui/material';
import theme from '@/theme';

const meta: Meta<typeof UploadFileIcon> = {
  title: 'atoms/UploadFileIcon',
  component: UploadFileIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'This is the UploadFileIcon component.',
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

export const DefaultUploadFileIcon: Story = {
  args: {
    width: '30px',
    height: '30px',
  },
};
