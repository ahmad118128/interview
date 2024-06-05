import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ControledCheckbox } from './ControledCheckbox/ControledCheckbox';
import { IControledCheckboxProps } from './ControledCheckbox/type';
import { useForm, FormProvider } from 'react-hook-form';

export default {
  title: 'Components/Checkbox/ControledCheckbox',
  component: ControledCheckbox,
} as Meta;

const Template: StoryFn<IControledCheckboxProps> = (args) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <ControledCheckbox {...args} />
    </FormProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'checkbox',
  control: useForm().control,
  disabled: false,
  checked: false,
  error: false,
  onChange: (event) => {
    console.log(event?.target.checked);
  },
};
