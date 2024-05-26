import styled from '@emotion/styled';

interface ContainerProps {
  type?: string;
  color?: string;
}

const Container = styled.h1<ContainerProps>`
  font-size: ${(props) => (props.type === 'secondary' ? '50%' : '100%')};
  margin-bottom: 5px;
  color: ${(props) => props.color || 'black'};
`;

interface Props {
  text: string;
  type?: string;
  color?: string;
}

export const Title = ({ text, type = 'primary', color }: Props) => {
  return (
    <Container type={type} color={color}>
      {text}
    </Container>
  );
};
