interface Props {
  name?: string;
  color?: string;
}

export const Hello = ({ name = 'flature', color = 'blue' }: Props) => {
  return <div style={{ color }}>Hello {name}</div>;
};

/*
function Hello({ name, color }: Props) {
  return <div style={{ color }}>Hello {name}</div>;
}
*/
export default Hello;
