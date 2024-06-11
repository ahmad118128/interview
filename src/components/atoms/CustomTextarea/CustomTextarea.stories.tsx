import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import { CustomTextArea } from './CustomTextarea';
import { TextAreaProps } from './type';
import {
  Control,
  FieldValues,
  RegisterOptions,
  useForm,
} from 'react-hook-form';

const meta: Meta<typeof CustomTextArea> = {
  title: 'atoms/TextArea',
  component: CustomTextArea,
  parameters: {
    docs: {
      description: {
        component:
          'This is the default state of the `CustomTextArea` component.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    control: { control: false, description: 'React Hook Form control object.' },
    ltr: {
      control: 'boolean',
      description: 'Text direction left-to-right when true.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the text area when true.',
    },
    readOnly: {
      control: 'boolean',
      description: 'Makes the text area read-only when true.',
    },
    rules: {
      control: 'object',
      description: 'Validation rules for the text area.',
    },
    label: { control: 'text', description: 'Label for the text area.' },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the text area.',
    },
    minRows: {
      control: 'number',
      description: 'Minimum number of rows for the text area.',
    },
    defaultValue: {
      control: 'text',
      description: 'Default value for the text area.',
    },
    name: { control: 'text', description: 'Name attribute for the text area.' },
  },
  args: {
    control: {} as Control<FieldValues>,
    ltr: false,
    disabled: false,
    readOnly: false,
    minRows: 3,
    defaultValue: '',
    name: 'customTextArea',
    rules: {} as RegisterOptions,
    label: '',
    placeholder: '',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Text area in default state.',
      },
    },
  },
  render: (args: TextAreaProps) => {
    const methods = useForm();
    return <CustomTextArea {...args} control={methods.control} />;
  },
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Text area in disabled state.',
      },
    },
  },
  args: {
    disabled: true,
    label: 'Disabled Text Area',
  },
  render: (args: TextAreaProps) => {
    const methods = useForm();
    return <CustomTextArea {...args} control={methods.control} />;
  },
};

export const ReadOnly: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Text area in read-only state.',
      },
    },
  },
  args: {
    readOnly: true,
    label: 'Read-Only Text Area',
  },
  render: (args: TextAreaProps) => {
    const methods = useForm();
    return <CustomTextArea {...args} control={methods.control} />;
  },
};
