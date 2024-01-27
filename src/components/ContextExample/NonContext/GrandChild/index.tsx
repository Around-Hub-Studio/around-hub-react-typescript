import styled from '@emotion/styled';

const Container = styled.div``;

interface Props {
  value: string;
}

export const GrandChild = ({ value }: Props) => {
  return <Container>{value}</Container>;
};