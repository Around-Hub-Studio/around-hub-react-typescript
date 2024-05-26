import styled from '@emotion/styled';

const Container = styled.img`
  width: 100%;
  border-radius: 4px;
`;

interface Props {
  readonly src: string;
  readonly alt: string;
}

export const Photo = (props: Props) => {
  return <Container src={props.src} alt={props.alt} />;
};
