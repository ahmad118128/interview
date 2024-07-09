import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';
import CustomSnackbar from '.';

const meta: Meta<typeof CustomSnackbar> = {
  title: 'atoms/CustomSnackbar',
  component: CustomSnackbar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    open: true,
    status: 'error',
    message: '',
  },
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Erro: Story = {
  render: (args) => <CustomSnackbar {...args} />,
  args: {
    status: 'error',
    message: 'حداقل یک ایتم را انتخاب کنید',
  },
  parameters: {
    docs: {
      description: {
        component: 'This is the error state of the `CustomSnackbar` component.',
      },
    },
  },
};
export const Success: Story = {
  render: (args) => <CustomSnackbar {...args} />,
  args: { status: 'success', message: 'پیام موفقیت' },
  parameters: {
    docs: {
      description: {
        component:
          'This is the success state of the `CustomSnackbar` component.',
      },
    },
  },
};
export const Info: Story = {
  render: (args) => <CustomSnackbar {...args} />,
  args: { status: 'info', message: 'پیام اطلاعات' },
  parameters: {
    docs: {
      description: {
        component: 'This is the info state of the `CustomSnackbar` component.',
      },
    },
  },
};
export const Warning: Story = {
  render: (args) => <CustomSnackbar {...args} />,
  args: { status: 'warning', message: 'پیام احتیاط' },
  parameters: {
    docs: {
      description: {
        component:
          'This is the warning state of the `CustomSnackbar` component.',
      },
    },
  },
};
