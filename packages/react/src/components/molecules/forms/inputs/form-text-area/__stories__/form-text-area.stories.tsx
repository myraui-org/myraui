import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@nextui-org/react';
import FormTextArea, { FormTextAreaProps } from '../form-text-area';
import { Form, useForm } from '../../../form';

export default {
  title: 'Components/Molecules/Forms/Inputs/FormTextArea',
  component: FormTextArea,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof FormTextArea>;
type Story = StoryObj<typeof FormTextArea>;

const defaultProps = {};

const Template = (args: FormTextAreaProps) => {
  const form = useForm();

  return (
    <Form
      form={form}
      onSubmit={(values) => {
        alert('Submitted: ' + JSON.stringify(values));
      }}
      className="flex items-center gap-2"
    >
      <FormTextArea {...args} name="message" label="Message: " />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
