import styled from '@emotion/styled';

const Container = styled.button``;

interface Props {
  label: string;
  onClick: () => void;
}

export const Button = (props: Props) => {
  return <Container onClick={props.onClick}>{props.label}</Container>;
};
