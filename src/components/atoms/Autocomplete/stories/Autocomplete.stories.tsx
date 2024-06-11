import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react'; // Import Story instead of StoryFn
import { CustomAutocomplete } from '../Autocomplete';
import { ExtendedAutocompleteProps } from '../type';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';

const meta: Meta<typeof CustomAutocomplete> = {
  title: 'Components/Autocomplete',
  component: CustomAutocomplete,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};
export default meta;

type StoryArgs = ExtendedAutocompleteProps<string, false, false>;

export const Default: StoryFn<StoryArgs> = (args) => (
  <CustomAutocomplete {...args} />
);
Default.args = {
  label: 'Autocomplete',
  options: ['1', '2', '3'],
  onChange: (event: React.ChangeEvent<{}>, newValue: string | null) => {
    console.log(newValue);
  },
  onTextFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  },
  dir: 'rtl',
};
