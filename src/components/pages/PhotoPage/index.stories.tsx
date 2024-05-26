import type { Meta, StoryObj } from '@storybook/react';
import PhotoPage from './index';

const meta = {
  title: 'pages/PhotoPage',
  component: PhotoPage,
  parameters: {
    layout: 'centered',
  },
  args: {},
  tags: ['autodocs'],
} satisfies Meta<typeof PhotoPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
