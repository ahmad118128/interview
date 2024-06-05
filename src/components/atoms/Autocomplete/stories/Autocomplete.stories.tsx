import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { CustomAutocomplete } from '../Autocomplete';
import { ExtendedAutocompleteProps } from '../type';

export default {
  title: 'Components/Autocomplete',
  component: CustomAutocomplete,
} as Meta;

const Template: StoryFn<ExtendedAutocompleteProps<string, false, false>> = (
  args
) => <CustomAutocomplete {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Autocomplete',
  options: ['Option 1', 'Option 2', 'Option 3'],
  onChange: (event: React.ChangeEvent<{}>, newValue: string | null) => {
    console.log(newValue);
  },
  onTextFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  },
  dir: 'rtl',
};
