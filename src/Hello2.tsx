import styled from "@emotion/styled";

interface Props {
    name: string;
    color: string;
}

interface ContainerProps {
    color: string;
}

const Container = styled.div<ContainerProps>`
  color: ${(props) => props.color};
`;

export const Hello = ({name, color}: Props) => {
    return <Container color={color}>Hello {name}</Container>;
};

/*
function Hello({name, color}: Props) {
    return <div style={{color}}>Hello {name}</div>
}
 */

export default Hello;
