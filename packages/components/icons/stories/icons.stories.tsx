import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { icon } from '@myraui/theme';
import * as icons from '../src';
import { Icon, IconProps } from '@myraui/icon';

export default {
  title: 'Components/Icons',
  component: Icon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['tiny', 'small', 'medium', 'large', 'huge'],
      },
    },
  },
} as Meta<typeof Icon>;
type Story = StoryObj<typeof Icon>;

const defaultProps: IconProps = {
  ...icon.defaultVariants,
  size: 'huge',
};

function pascalCaseToTitleCase(str: string) {
  return str.replace(/([A-Z])/g, ' $1').trim();
}

const Template = (props: IconProps) => {
  return (
    <div className="grid xl:grid-cols-10 grid-cols-8 gap-4">
      {Object.entries(icons).map(([name, Icon]) => {
        return (
          <div key={name} className="flex gap-4 flex-col items-center border-tiny border-divider rounded-medium py-4 px-8 text-center justify-center">
            <div className="flex gap-4">
              <Icon {...props} />
            </div>
            <span className="!text-tiny">{pascalCaseToTitleCase(name.replace('Icon', ''))}</span>
          </div>
        );
      })}
    </div>
  );
};

export const Icons: Story = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
