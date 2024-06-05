// src/components/molecules/Autocomplete/RHFAutocomplete.stories.tsx

import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { CustomRHFAutocomplete } from '../RHFAutocomplete';
import { RHFAutoCompleteProps } from '../type';
import { generalStr } from '@/strings';

export default {
  title: 'Components/Autocomplete/RHFAutocomplete',
  component: CustomRHFAutocomplete,
} as Meta;

const Template: StoryFn<RHFAutoCompleteProps<string, any, false>> = (args) => {
  const { control } = useForm();

  return <CustomRHFAutocomplete {...args} control={control} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'autocomplete',
  label: 'RHFAutocomplete',
  options: ['Option 1', 'Option 2', 'Option 3'],
  defaultValue: '',
  rules: { required: 'This field is required' },
  dir: 'rtl',
  noOptionsText: generalStr.notFound,
};
