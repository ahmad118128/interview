import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import { RegisterOptions, useForm, FieldValues } from 'react-hook-form';
import theme from '@/theme';
import { TCustomInput } from '@/components/atoms/CustomInput/type';
import { CustomInput as RHFCustomInput } from './RHFCustomInput';
import { ValidateType } from '@/components/BaseComponents/baseInput/type';

const meta: Meta<typeof RHFCustomInput> = {
  title: 'atoms/Input',
  component: RHFCustomInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'This is the default state of the `CustomInput` component.',
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
    name: { control: 'text', description: 'Name of the input field.' },
    control: { control: false, description: 'React Hook Form control object.' },
    rules: {
      control: 'object',
      description: 'Validation rules for the input field.',
    },
    label: { control: 'text', description: 'Label for the input field.' },
    type: {
      control: { type: 'select', options: ['text', 'password', 'email'] },
      description: 'Type of the input field.',
    },
    inputProps: { control: 'object', description: 'Input properties.' },
    disabled: { control: 'boolean', description: 'Disables the input field.' },
    value: { control: 'text', description: 'Value of the input field.' },
    onChange: { action: 'onChange', description: 'Change event handler.' },
    validateType: {
      control: { type: 'select', options: ['email', 'password'] },
      description: 'Type of validation.',
    },
    error: { control: 'object', description: 'Error object for validation.' },
    fullWidth: { control: 'boolean', description: 'Full width input field.' },
    InputProps: { control: 'object', description: 'MUI Input properties.' },
  },
  args: {
    name: 'customInput',
    rules: {} as RegisterOptions,
    label: 'Custom Input',
    type: 'text',
    disabled: false,
    value: '',
    validateType: '' as ValidateType,
    fullWidth: true,
    InputProps: {},
    error: { message: 'This is an error message.' },
  },
};

export default meta;

type Story = StoryObj<TCustomInput<FieldValues>>;

export const Input: Story = {
  render: (args) => {
    const { control } = useForm();
    return <RHFCustomInput {...args} control={control} name="customInput" />;
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the default state of the `CustomInput` component.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled Input',
  },
  render: (args) => {
    const { control } = useForm();
    return <RHFCustomInput {...args} control={control} name="customInput" />;
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story shows the `CustomInput` component in a disabled state.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    error: { message: 'This is an error message.' },
    label: 'Input with Error',
  },
  render: (args) => {
    const { control } = useForm();
    return <RHFCustomInput {...args} control={control} name="customInput" />;
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story displays the `CustomInput` component with an error message.',
      },
    },
  },
};
