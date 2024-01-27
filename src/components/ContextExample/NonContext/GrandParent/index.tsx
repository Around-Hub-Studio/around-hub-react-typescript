import { Parent } from '../Parent';

interface Props {
  value: string;
}

export const GrandParent = ({ value }: Props) => {
  return <Parent value={value} />;
};