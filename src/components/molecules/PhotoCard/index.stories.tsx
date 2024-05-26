import type { Meta, StoryObj } from '@storybook/react';
import { PhotoCard } from './index';

const meta = {
  title: 'Molecules/PhotoCard',
  component: PhotoCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    id: 0,
    title: 'Around Hub Studio',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PhotoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Primary',
    src: 'https://via.placeholder.com/300/771796',
    alt: 'Flature',
  },
};

export const Secondary: Story = {
  args: {
    title: 'Secondary',
    src: 'https://via.placeholder.com/150/771796',
    alt: 'Flature',
  },
};
