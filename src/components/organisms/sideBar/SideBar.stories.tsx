import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import SideBar from './index';
import { sidebarList as defaultSidebarList } from '@/constants';
import SideBarItem from './SideBarItem';
import { openDashboard } from '@/context/dashboardContext';
import { IconTitleProps } from './type';

const meta: Meta<typeof SideBar> = {
  title: 'Organisms/SideBar',
  component: SideBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'This is the SideBar component.',
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ height: '105vh' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Determines if the sidebar is open or closed.',
    },
    setIsOpen: {
      action: 'setIsOpen',
      description: 'Function to set the open state of the sidebar.',
    },
    sidebarList: {
      control: 'object',
      description: 'List of items to be displayed in the sidebar.',
    },
    onClick: {
      control: 'action',
      description: 'Function to handle item click events.',
    },
    isSelected: {
      control: 'boolean',
      description: 'Determines if the sidebar item is selected.',
    },
  },
  args: {
    isOpen: true,
    setIsOpen: () => {},
    sidebarList: defaultSidebarList,
    onClick: () => {},
    isSelected: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Sidebar: Story = {
  args: {
    isOpen: false,
    setIsOpen: () => {},
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story shows the Sidebar component with isOpen set to false.',
      },
    },
  },
  render: (args) => <SideBar {...args} />,
};

export const Open: Story = {
  args: {
    isOpen: true,
    setIsOpen: () => {},
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story shows the Sidebar component with isOpen set to true.',
      },
    },
  },
  render: (args) => (
    <openDashboard.Provider
      value={{
        isOpen: args.isOpen,
        setIsOpen: args.setIsOpen,
      }}
    >
      <SideBar />
    </openDashboard.Provider>
  ),
};

export const Close: Story = {
  args: {
    isOpen: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story shows the Sidebar component with isOpen set to false.',
      },
    },
  },
};

export const SidebarItems: Story = {
  args: {
    isOpen: true,
    setIsOpen: () => {},
    items: defaultSidebarList,
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story shows the SidebarItems component with isOpen set to true.',
      },
    },
  },
  render: ({ items, ...args }) => (
    <openDashboard.Provider
      value={{ isOpen: args.isOpen, setIsOpen: args.setIsOpen }}
    >
      {items.map((item: IconTitleProps) => (
        <SideBarItem
          key={item.title}
          {...item}
          onClick={args.onClick}
          open={args.isOpen}
          selected={args.isSelected}
        />
      ))}
    </openDashboard.Provider>
  ),
};
