import { Child } from '../Child';

interface Props {
  value: string;
}

export const Parent = ({ value }: Props) => {
  return <Child value={value} />;
};