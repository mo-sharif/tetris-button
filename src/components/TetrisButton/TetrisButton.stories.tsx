// src/TetrisButton.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TetrisButton from './TetrisButton';
import { TetrisButtonProps } from './interface';

export default {
  title: 'Example/TetrisButton',
  component: TetrisButton,
  argTypes: {
    textAlign: {
      control: { type: 'select', options: ['left', 'center', 'right'] },
    },
    fontSize: {
      control: {
        type: 'select',
        options: ['tiny', 'small', 'medium', 'large'],
      },
    },
    fontWeight: {
      control: {
        type: 'select',
        options: ['normal', 'bold', 'bolder', 'lighter'],
      },
    },
    letterSpacing: {
      control: { type: 'text' },
    },
    lineHeight: {
      control: {
        type: 'select',
        options: ['normal', '1.2', '1.5', '2', '3.2'],
      },
    },
    isSelected: {
      control: { type: 'boolean' },
    },
    backgroundColor: {
      control: { type: 'color' },
    },
    colors: {
      control: { type: 'object' },
    },
  },
} as Meta;

const Template: StoryFn<TetrisButtonProps> = (
  args: React.JSX.IntrinsicAttributes & TetrisButtonProps,
) => <TetrisButton {...args}>Click Me</TetrisButton>;

export const Default = Template.bind({});
Default.args = {
  fontFamily: 'monospace',
  textAlign: 'center',
  fontSize: 'medium',
  fontWeight: 'normal',
  letterSpacing: 'normal',
  lineHeight: 'normal',
  isSelected: false,
  backgroundColor: '#ffffff',
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  isSelected: true,
};

export const LargeText = Template.bind({});
LargeText.args = {
  ...Default.args,
  fontSize: 'large',
};

export const CustomSpacing = Template.bind({});
CustomSpacing.args = {
  ...Default.args,
  letterSpacing: '0.1em',
  lineHeight: '1.5',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  ...Default.args,
  colors: ['#ff77aa', '#77ddff', '#77ff77', '#ffff77'],
};
