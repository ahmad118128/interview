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
  parameters: {
    docs: {
      description: {
        component:
          'This is the default state of the `CustomSearchBar` component.',
      },
    },
  },
  argTypes: {
    searchHandler: {
      control: () => {},
      description: 'on click button for search bar.',
    },
    name: { control: 'text', description: 'Name attribute for search bar.' },
    placeholder: {
      control: 'text',
      description: 'place holder for search bar.',
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Base: Story = {
  render: (args) => <CustomSearchBar {...args} />,
  parameters: {
    docs: {
      description: {
        component:
          'This is the default state of the `CustomSearchBar` component.',
      },
    },
  },
};
export const onClick: Story = {
  args: { searchHandler: () => {} },
  render: (args) => <CustomSearchBar {...args} />,
  parameters: {
    docs: {
      description: {
        component:
          'This is the onClick state of the `CustomSearchBar` component.',
      },
    },
  },
};
