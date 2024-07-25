import { CustomRadioButton } from '@/components/atoms/CustomRadioButton';
import {
  ICustomRadio,
  groupDataFace,
} from '@/components/atoms/CustomRadioButton/type';
import theme from '@/theme';
import { ThemeProvider } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';
import { Control, RegisterOptions } from 'react-hook-form';
import { StyledRadioButton } from './styled';
const meta: Meta<typeof CustomRadioButton> = {
  title: 'atoms/CustomRadioButton',
  component: CustomRadioButton,
  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    value: '',
    name: '',
    label: '',
    rules: {} as RegisterOptions,
    control: {} as Control,
  },
};
export default meta;
type Story = StoryObj<ICustomRadio>;
export const RadioItems: Omit<Story, 'control'> = {
  render: (args) => <StyledRadioButton {...args} />,
};
