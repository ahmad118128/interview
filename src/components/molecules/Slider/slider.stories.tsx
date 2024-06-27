import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';
import SlidePicture from '.';
const meta: Meta<typeof SlidePicture> = {
  component: SlidePicture,
  title: 'SlidePicture',
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
type Story = StoryObj<typeof meta>;
export const Base: Story = {
  render: (args) => <SlidePicture {...args} />,
  parameters: {
    docs: {
      description: {
        component: 'This is the default state of the `SlidePicture` component.',
      },
    },
  },
};
