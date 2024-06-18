import { CustomRadioButton } from '@/components/atoms/CustomRadioButton';
import {
  ICustomRadio,
  IStyledRadio,
} from '@/components/atoms/CustomRadioButton/type';
import { Controller, useForm } from 'react-hook-form';

import theme from '@/theme';
import { ThemeProvider } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';
import { Control, FieldError, RegisterOptions } from 'react-hook-form';
import { types } from 'util';
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
  argTypes: {},
};
export default meta;
type Story = StoryObj<ICustomRadio>;

export const Base: Story = {
  render: (args) => <CustomRadioButton {...args} />,
};
export const Off: Story = {
  parameters: {
    docs: {
      description: {
        story: 'radio button in off state.',
      },
    },
  },
  render: (args) => <CustomRadioButton {...args} />,
};
export const On: Story = {
  parameters: {
    docs: {
      description: {
        story: 'radio button in on state.',
      },
    },
  },
  render: (args) => <CustomRadioButton {...args} />,
};

export const Error: Story = {
  parameters: {
    docs: {
      description: {
        story: 'radio button in error state.',
      },
    },
  },
  render: (args) => <CustomRadioButton {...args} />,
};
export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'radio button in disabled state.',
      },
    },
  },

  render: (args) => <CustomRadioButton {...args} />,
};
export const RadioItems: Omit<Story, 'control'> = {
  args: {
    name: '',
  },

  render: ({ name, value }) => (
    <>
      <StyledRadioButton
        value={name}
        key={value}
        name={name}
        disabled
        // error
        checked
      />
    </>
  ),
  //   <CustomRadioButton
  //  {...args} />
};
