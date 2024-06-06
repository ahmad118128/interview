import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import { UnControlledCustomInput } from './CustomInput';
import {
  BaseInputProps,
  ValidateType,
} from '@/components/BaseComponents/baseInput/type';

const meta: Meta<typeof UnControlledCustomInput> = {
  title: 'atoms/Input',
  component: UnControlledCustomInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'This is the default state of the `UnControlledCustomInput` component.',
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
    name: {
      control: 'text',
      description: 'The name of the input field, used for form handling.',
    },
    label: {
      control: 'text',
      description: 'The label for the input field, displayed above the input.',
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email'],
        description:
          'The type of the input field (e.g., text, password, email).',
      },
    },
    inputProps: {
      control: 'object',
      description: 'Additional props to pass to the input element.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input field when true.',
    },
    value: {
      control: 'text',
      description: 'The value of the input field.',
    },
    onChange: {
      action: 'onChange',
      description: 'Event handler for when the input value changes.',
    },
    validateType: {
      control: {
        type: 'select',
        options: ['email', 'password'],
        description: 'Specifies the validation type for the input field.',
      },
    },
    error: {
      control: 'object',
      description: 'An error object containing validation error messages.',
    },
    fullWidth: {
      control: 'boolean',
      description:
        'Makes the input field take up the full width of its container when true.',
    },
    InputProps: {
      control: 'object',
      description: 'Props to pass to the Input component.',
    },
  },
  args: {
    name: 'input',
    label: 'Label',
    type: 'text',
    inputProps: {},
    disabled: false,
    value: '',
    onChange: () => {},
    validateType: 'email' as ValidateType,
    error: null,
    fullWidth: true,
    InputProps: {},
  },
};

export default meta;
type Story = StoryObj<typeof UnControlledCustomInput> & {
  args?: Partial<BaseInputProps>;
};
export const Input: Story = {
  render: (args) => <UnControlledCustomInput {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'This is the default state of the `UnControlledCustomInput` component.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled Input',
  },
  render: (args: BaseInputProps) => <UnControlledCustomInput {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'This story shows the `UnControlledCustomInput` component in a disabled state.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    error: { message: 'This is an error message.' },
    label: 'Input with Error',
  },
  render: (args: BaseInputProps) => <UnControlledCustomInput {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'This story displays the `UnControlledCustomInput` component with an error message.',
      },
    },
  },
};
