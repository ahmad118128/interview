import { CustomRadioButton } from '@/components/atoms/CustomRadioButton';
import {
  ICustomRadio,
  IStyledRadio,
} from '@/components/atoms/CustomRadioButton/type';
import theme from '@/theme';
import { ThemeProvider } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';
import { Control, FieldError, RegisterOptions } from 'react-hook-form';

const meta: Meta<typeof CustomRadioButton> = {
  title: 'atoms/CustomRadioButton',
  component: CustomRadioButton,
  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    value: '',
    name: '',
    label: '',

    rules: {} as RegisterOptions,
    control: {} as Control,
    // disabled: false,
    // checked:false ,
  },
};
export default meta;
type Story = StoryObj<typeof meta>;
// & {
//   args?: Partial<ICustomRadio>;
// };

export const Base: Story = {
  render: (args) => <CustomRadioButton {...args} />,
};
