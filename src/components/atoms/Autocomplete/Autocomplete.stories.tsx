import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';
import { CustomAutocomplete } from '.';

const meta: Meta<typeof CustomAutocomplete> = {
  title: 'Components/Autocomplete/Autocomplete',
  component: CustomAutocomplete,
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
  render: (args) => <CustomAutocomplete {...args} />,
  args: {
    label: 'Autocomplete',
    options: ['1', '2', '3'],
    onChange: (event: React.ChangeEvent<{}>, newValue: unknown) => {
      console.log(newValue);
    },
    onTextFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
    },
    dir: 'rtl',
  },
};
