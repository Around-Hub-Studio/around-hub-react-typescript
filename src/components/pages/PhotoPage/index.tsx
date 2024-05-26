import React, { useEffect, useState } from 'react';
import PhotoTemplate from '../../templates/PhotoTemplate';

interface Photo {
  readonly albumId: number;
  readonly id: number;
  readonly title: string;
  readonly url: string;
  readonly thumbnailUrl: string;
}

async function fetchPhotos(): Promise<ReadonlyArray<Photo>> {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  if (!response.ok) {
    throw new Error('Error occurs');
  }
  const parsedData = await response.json();
  const transformedPhotos = parsedData.slice(0, 4);

  return transformedPhotos;
}

const PhotoPage = () => {
  const [photos, setPhotos] = useState<ReadonlyArray<Photo>>([]);

  useEffect(() => {
    fetchPhotos().then((response) => setPhotos(response));
  }, []);

  return <PhotoTemplate photos={photos} />;
};

export default PhotoPage;
