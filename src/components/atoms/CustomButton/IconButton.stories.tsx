import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';
import { IconButtonProps } from './type';
import { IconButton } from './IconButton';

export default {
  title: 'IconButton',
  component: IconButton,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<IconButtonProps> = (args) => {
  return <IconButton {...args} />;
};

export const defaultButton = Template.bind({});
defaultButton.args = {
 title:"search",
 iconName: "tabler:search",
 width:20,
 height:20
 };