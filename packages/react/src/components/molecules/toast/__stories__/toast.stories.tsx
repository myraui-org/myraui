import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@nextui-org/react';
import { useToaster } from '../use-toaster';
import Toast, { ToastProps } from '../toast';

export default {
  title: 'Components/Molecules/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    action: {
      table: {
        disable: true,
      },
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      defaultValue: 'default',
    },
    disableAnimation: {
      control: {
        type: 'boolean',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<typeof Toast>;
type Story = StoryObj<typeof Toast>;

const defaultProps = {
  children: 'Show toast',
  description: 'Friday, February 10, 2024 at 5:57 PM',
  disableAnimation: false,
};

const Template = (props: ToastProps) => {
  const { toast } = useToaster();
  return <Button onClick={() => toast(props)}>{props.children}</Button>;
};

export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

export const WithTitle: Story = {
  render: Template,
  args: {
    ...defaultProps,
    title: 'Scheduled: Catch up',
  },
};

export const WithAction: Story = {
  render: Template,
  args: {
    ...defaultProps,
    title: 'Uh oh! Something went wrong',
    // @ts-expect-error
    description: 'We couldn’t process your payment. Please try again.',
    action: 'Try again',
  },
};

export const Colors: Story = {
  render: (props) => {
    const { toast } = useToaster();

    const colors = ['default', 'primary', 'secondary', 'success', 'warning', 'danger'] as const;

    return (
      <div className="flex gap-2">
        {colors.map((color) => (
          <Button key={color} onClick={() => toast({ ...props, color })} color={color}>
            {color}
          </Button>
        ))}
      </div>
    );
  },
  args: {
    ...defaultProps,
    title: 'Scheduled: Catch up',
    // @ts-expect-error
    description: 'Friday, February 10, 2024 at 5:57 PM',
    color: 'primary',
  },
};
