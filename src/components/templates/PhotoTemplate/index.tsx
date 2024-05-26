import styled from '@emotion/styled';
import { Photo } from '../../atoms/Photo';
import PhotoGallery from '../../organisms/PhotoGallery';

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

interface PhotoTemplateProps {
  readonly photos: ReadonlyArray<Photo>;
}

const App = ({ photos }: PhotoTemplateProps) => {
  return (
    <Container>
      <PhotoGallery photos={photos} />
    </Container>
  );
};

export default App;
