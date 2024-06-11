import CustomSearchBar from '@/components/atoms/CustomSearchBar';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';

const meta: Meta<typeof CustomSearchBar> = {
  title: 'atoms/CustomSearchBar',
  component: CustomSearchBar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    searchHandler: () => {},
    name: '',
    placeholder: '',
  },
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Base: Story = {
  render: (args) => <CustomSearchBar {...args} />,
};
