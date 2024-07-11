import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import CustomLinearProgressBar from '.';

const meta: Meta<typeof CustomLinearProgressBar> = {
  title: 'atoms/LinearProgressBar',
  component: CustomLinearProgressBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'This is the default state of the `CustomLinearProgressBar` component.',
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
  argTypes: {
    value: { control: 'number', description: 'Value of the progress bar.' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <CustomLinearProgressBar {...args} />;
  },
};
