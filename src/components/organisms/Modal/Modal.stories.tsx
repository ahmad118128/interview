import * as React from 'react';
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import CustomModal from './CustomModal';
import theme from '@/theme';
import { CustomButton } from '@/components/atoms/CustomButton';
import { generalStr, registrationStr } from '@/strings';
const meta: Meta<typeof CustomModal> = {
  title: 'atoms/Modal',
  component: CustomModal,
  tags: ['autodocs'],

  parameters: {
    docs: {
      description: {
        component: 'This is the default state of the `CustomModal` component.',
      },
    },
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls the visibility of the modal.',
    },
    title: { control: 'text', description: 'Title of the modal.' },
    errorTitle: {
      control: 'text',
      description: 'Error title displayed in the modal.',
    },
    buttons: {
      control: 'boolean',
      description: 'Show action buttons if true.',
    },
    activeButtonHandler: { action: 'activeButtonClicked' },
    deleteButtonHandler: { action: 'deleteButtonClicked' },
  },
  args: {
    open: false,
    title: generalStr.explanationText,
    errorTitle: generalStr.errors,
    buttons: true,
    activeButtonHandler: () => {},
    deleteButtonHandler: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof CustomModal>;

export const Modal: Story = {
  render: (args) => {
    const [open, setOpen] = useState(args.open);

    const toggleModal = () => setOpen(!open);

    return (
      <>
        <CustomButton onClick={toggleModal}>
          {registrationStr.signIn}
        </CustomButton>
        <CustomModal
          {...args}
          open={open}
          setOpen={toggleModal}
          deleteButtonHandler={toggleModal}
          activeButtonHandler={toggleModal}
        >
          <div style={{ direction: 'rtl' }}>
            <p>{registrationStr.sucsessMsgPart3}</p>
          </div>
        </CustomModal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the default state of the `CustomModal` component.',
      },
    },
  },
};

export const WithoutTitle: Story = {
  args: {
    title: generalStr.explanationText,
    open: false,
  },
  render: (args) => {
    const [open, setOpen] = useState(args.open);

    const toggleModal = () => setOpen(!open);

    return (
      <>
        <CustomButton onClick={toggleModal}>
          {registrationStr.signIn}
        </CustomButton>
        <CustomModal
          {...args}
          open={open}
          setOpen={toggleModal}
          deleteButtonHandler={toggleModal}
        >
          <div style={{ direction: 'rtl' }}>
            <p>{registrationStr.sucsessMsgPart3}</p>
          </div>
        </CustomModal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'This story shows the `CustomModal` component without a title.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    errorTitle: generalStr.errors,
    open: false,
  },
  render: (args) => {
    const [open, setOpen] = useState(args.open);

    const toggleModal = () => setOpen(!open);

    return (
      <>
        <CustomButton onClick={toggleModal}>
          {registrationStr.signIn}
        </CustomButton>
        <CustomModal
          {...args}
          open={open}
          setOpen={toggleModal}
          deleteButtonHandler={toggleModal}
        >
          <div style={{ direction: 'rtl' }}>
            <p>{registrationStr.sucsessMsgPart3}</p>
          </div>
        </CustomModal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story displays the `CustomModal` component with an error title.',
      },
    },
  },
};

export const WithoutButtons: Story = {
  args: {
    buttons: false,
    open: false,
  },
  render: (args) => {
    const [open, setOpen] = useState(args.open);

    const toggleModal = () => setOpen(!open);

    return (
      <>
        <CustomButton onClick={toggleModal}>
          {registrationStr.signIn}
        </CustomButton>
        <CustomModal
          {...args}
          open={open}
          setOpen={toggleModal}
          deleteButtonHandler={toggleModal}
        >
          <div style={{ direction: 'rtl' }}>
            <p>{registrationStr.sucsessMsgPart3}</p>
          </div>
        </CustomModal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story shows the `CustomModal` component without action buttons.',
      },
    },
  },
};
