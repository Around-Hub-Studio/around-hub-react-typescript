import type { Meta, StoryObj } from '@storybook/react';
import PhotoTemplate from './index';

const meta = {
  title: 'templates/PhotoTemplate',
  component: PhotoTemplate,
  parameters: {
    layout: 'centered',
  },
  args: {},
  tags: ['autodocs'],
} satisfies Meta<typeof PhotoTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    photos: [
      {
        albumId: 1,
        id: 1,
        title: 'Photo 1',
        url: 'https://via.placeholder.com/600/92c952',
        thumbnailUrl: 'https://via.placeholder.com/150/92c952',
      },
      {
        albumId: 1,
        id: 2,
        title: 'Photo 2',
        url: 'https://via.placeholder.com/600/771796',
        thumbnailUrl: 'https://via.placeholder.com/150/771796',
      },
      {
        albumId: 1,
        id: 3,
        title: 'Photo 3',
        url: 'https://via.placeholder.com/600/24f355',
        thumbnailUrl: 'https://via.placeholder.com/150/24f355',
      },
      {
        albumId: 1,
        id: 4,
        title: 'Photo 4',
        url: 'https://via.placeholder.com/600/d32776',
        thumbnailUrl: 'https://via.placeholder.com/150/d32776',
      },
    ],
  },
};
