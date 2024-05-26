import styled from '@emotion/styled';
import { Title } from '../../atoms/Title';
import { Photo } from '../../atoms/Photo';

const Container = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 200px;
`;

interface Props {
  readonly id: number;
  readonly title: string;
  readonly src: string;
  readonly alt: string;
}

export const PhotoCard = (props: Props) => {
  return (
    <Container key={props.id}>
      <Title text={props.title} />
      <Photo src={props.src} alt={props.alt} />
    </Container>
  );
};
