import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';
import { CustomButton } from '.';
import { ButtonProps } from './type';
import { IconButton } from './IconButton';

export default {
  title: 'CustomButton',
  component: CustomButton,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => {
  return <CustomButton {...args} />;
};

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: 'Custom Button',
  loading: false,
  loadingText: false,
  type: 'button',
  variant: 'outlined',
  disableElevation: false,
  size: 'large',
  onClick: () => {
    console.log('modalData.id');
  },
  disabled: false,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  type: 'button',
};

export const LoadingText = Template.bind({});
LoadingText.args = {
  loadingText: true,
  type: 'button',
  variant: 'contained',
};

export const CustomIconButton = Template.bind({});
CustomIconButton.args = {
  children: <IconButton iconName="streamline:delete-1" size="medium" />,
  loading: false,
  loadingText: false,
  type: 'button',
  variant: 'outlined',
  size: 'large',
};
