import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const PhotoCard = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 200px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Photo = styled.img`
  width: 100%;
  border-radius: 4px;
`;

interface Photo {
  readonly albumId: number;
  readonly id: number;
  readonly title: string;
  readonly url: string;
  readonly thumbnailUrl: string;
}

// async, await을 사용한 코드 단순화
async function fetchPhotos() {
  // 호출 결과를 로딩중인지 아닌지 판단할 수 있는 로직을 추가해볼 수 있음
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  if (!response.ok) {
    throw new Error('Error occurs');
  }
  const parsedData = await response.json();
  const transformedPhotos = parsedData.slice(0, 4);

  return transformedPhotos;
}

const App = () => {
  const [photos, setPhotos] = useState<ReadonlyArray<Photo>>([]);

  // useEffect를 사용한 기본적인 Fetch API
  /*  useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
          .then((response) => response.json())
          .then((data) => setPhotos(data.slice(0, 10))) // 원하는 개수만큼 자르기
          .catch((error) => console.error(error));
      }, []);*/

  useEffect(() => {
    fetchPhotos().then((response) => setPhotos(response));
  }, []);

  return (
    <Container>
      {photos.map((photo) => (
        <PhotoCard key={photo.id}>
          <Title>{photo.title}</Title>
          <Photo src={photo.thumbnailUrl} alt={photo.title} />
        </PhotoCard>
      ))}
    </Container>
  );
};

export default App;
