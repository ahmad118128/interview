import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { useForm, FormProvider } from 'react-hook-form';
import { ControledCheckbox } from '..';
import theme from '@/theme';

const meta: Meta<typeof ControledCheckbox> = {
  title: 'Components/Checkbox/ControledCheckbox',
  component: ControledCheckbox,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <ControledCheckbox {...args} control={methods.control} />
      </FormProvider>
    );
  },
  args: {
    name: 'checkbox',
    disabled: false,
    checked: false,
    error: false,
    onChange: (event) => {
      console.log(event?.target.checked);
    },
  },
};
export const Disabled: Story = {
  render: (args) => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <ControledCheckbox {...args} control={methods.control} />
      </FormProvider>
    );
  },
  args: {
    name: 'checkbox',
    disabled: true,
    checked: false,
    error: false,
    onChange: (event) => {
      console.log(event?.target.checked);
    },
  },
};
export const Checked: Story = {
  render: (args) => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <ControledCheckbox {...args} control={methods.control} />
      </FormProvider>
    );
  },
  args: {
    name: 'checkbox',
    disabled: false,
    checked: true,
    error: false,
    onChange: (event) => {
      console.log(event?.target.checked);
    },
  },
};
export const Error: Story = {
  render: (args) => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <ControledCheckbox {...args} control={methods.control} />
      </FormProvider>
    );
  },
  args: {
    name: 'checkbox',
    disabled: false,
    checked: false,
    error: true,
    onChange: (event) => {
      console.log(event?.target.checked);
    },
  },
};
