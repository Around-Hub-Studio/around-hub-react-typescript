import styled from '@emotion/styled';
import { PhotoCard } from '../../molecules/PhotoCard';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

interface Photo {
  readonly albumId: number;
  readonly id: number;
  readonly title: string;
  readonly url: string;
  readonly thumbnailUrl: string;
}

interface PhotoGalleryProps {
  photos: ReadonlyArray<Photo>;
}

export const PhotoGallery = ({ photos }: PhotoGalleryProps) => (
  <Container>
    {photos.map((photo) => (
      <PhotoCard
        id={photo.id}
        key={photo.id}
        title={photo.title}
        src={photo.thumbnailUrl}
        alt={photo.title}
      />
    ))}
  </Container>
);

export default PhotoGallery;
