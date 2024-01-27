import styled from '@emotion/styled';

const Li = styled.li``;

interface TextSpanProps {
  readonly done: boolean;
}

const TextSpan = styled.span<TextSpanProps>`
  color: ${(props) => (props.done ? '#999999' : 'inherit')};
  text-decoration: ${(props) => (props.done ? 'line-through' : 'inherit')};
  cursor: ${(props) => (!props.done ? 'pointer' : 'inherit')};
`;

const RemoveSpan = styled.span`
  color: red;
  margin-left: 4px;
  cursor: pointer;
`;

interface TodoItemProps {
  todo: {
    no: number;
    todo: string;
    done: boolean;
  };
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <Li>
      <TextSpan done={todo.done}>{todo.todo}</TextSpan>
      <RemoveSpan>(X)</RemoveSpan>
    </Li>
  );
};
